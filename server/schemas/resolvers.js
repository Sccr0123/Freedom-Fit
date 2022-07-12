const { AuthenticationError } = require("apollo-server-express");
const { Category, Course, Order, User } = require("../models");
const { populate } = require("../models/User");
const { signToken } = require("../utils/auth");

const resolver = {
	Query: {
		categories: async () => {
			const categories = Category.find().sort({ createdAt: -1 });
			return categories;
		},
		courses: async () => {
			const courses = Course.find().sort({ createdAt: -1 });
			return courses;
		},
		me: async (parent, args) => {
			const userData = await User.findOne({}).select("-__v -password");

			return userData;
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
		addOrder: async (parent, { courses }) => {
			const order = await User.create({ courses });
			return { order };
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
