const { AuthenticationError } = require("apollo-server-express");
const { Category, Course, Order, User } = require("../models");
const { populate } = require("../models/User");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const { signToken } = require("../utils/auth");

const resolver = {
	Query: {
		categories: async () => {
			const categories = Category.find().sort({ createdAt: -1 });
			return categories;
		},
		checkout: async (parent, args, context) => {
			const url = new URL(context.headers.referer).origin;
			const order = new Order({ courses: args.courses });
			const { courses } = await order.populate("courses");

			const line_items = [];

			for (let i = 0; i < courses.length; i++) {
				// generate course id
				const course = await stripe.products.create({
					name: courses[i].name,
					description: courses[i].description,
					images: [`${url}/images/${courses[i].image}`]
				});

				// generate price id using the course id
				const price = await stripe.prices.create({
					product: course.id,
					unit_amount: courses[i].price * 100,
					currency: "usd",
				});

				// add price id to the line items array
				line_items.push({
					price: price.id,
					quantity: 1,
				});
			}

			const session = await stripe.checkout.sessions.create({
				payment_method_types: ["card"],
				line_items,
				mode: "payment",
				success_url: `${url}/success`,
				cancel_url: `${url}/`,
			});

			return { session: session.id };
		},
		courses: async () => {
			const courses = Course.find().sort({ createdAt: -1 });
			return courses;
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select("-__v -password")
					.populate("orders");

				return userData;
			}

			throw new AuthenticationError("Not logged in");
		},
		order: async (parent, { _id }) => {
			const order = Order.findOne({ _id }).populate("courses");
			return order;
		},
		orders: async () => {
			const orders = Order.find()
				.sort({ createdAt: -1 })
				.populate("courses");
			return orders;
		},
		user: async (parent, { _id }) => {
			const user = User.findOne({ _id }).populate({
				path: "orders",
				populate: {
					path: "courses",
				},
			});
			return user;
		},
		users: async () => {
			const users = User.find()
				.sort({ createdAt: -1 })
				.populate({
					path: "orders",
					populate: {
						path: "courses",
					},
				});
			return users;
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		addOrder: async (parent, { courses }, context) => {
			if (context.user) {
				const order = new Order({ courses });

				await User.findByIdAndUpdate(context.user._id, {
					$push: { orders: order },
				});

				return order;
			}

			throw new AuthenticationError("Not logged in");
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect Email");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect Password");
			}

			const token = signToken(user);

			return { token, user };
		},
	},
};

module.exports = resolver;
