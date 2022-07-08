const db = require("../config/connection");
const { User, Course, Category, Order } = require("../models");

db.once("open", async () => {
	// await Category.deleteMany();

	// const categories = await Category.insertMany([
	// 	{ name: "Physical Fitness" },
	// 	{ name: "Nutrtion" },
	// 	{ name: "Mental Wellness" },
	// ]);

	// console.log("Categories seeded");

	// await Course.deleteMany();

	// const courses = await Course.insertMany([
	// 	{
	// 		name: "28 to Physical Freedom",
	// 		description:
	// 			"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	// 		image: "physical-cover.jpg",
	// 		category: categories[0]._id,
	// 		price: 12.99,
	// 	},
	// 	{
	// 		name: "Eat Freely",
	// 		description:
	// 			"Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
	// 		image: "nutrition-cover.jpg",
	// 		category: categories[1]._id,
	// 		price: 14.99,
	// 	},
	// 	{
	// 		name: "Free from Our Vices",
	// 		category: categories[2]._id,
	// 		description:
	// 			"Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
	// 		image: "wellness-cover.jpg",
	// 		price: 17.99,
	// 	},
	// ]);

	// console.log("Courses Seeded");

	// await Order.deleteMany();

	// await Order.create({
	// 	products: [
	// 		{ _id: "62c7717a75cadb644f95f57f" },
	// 		{ _id: "62c7717a75cadb644f95f580" },
	// 		{ _id: "62c7717a75cadb644f95f581" },
	// 	],
	// });

	// console.log("Orders Seeded");

	await User.deleteMany();

	const users = await User.insertMany([
		{
			firstName: "Pamela",
			lastName: "Washington",
			email: "pamela@testmail.com",
			password: "password12345",
			orders: [],
		},
		{
			firstName: "Elijah",
			lastName: "Holt",
			email: "eholt@testmail.com",
			password: "password12345",
			orders: [],
		},
		{
			firstName: "Mister",
			lastName: "Tester",
			email: "test@tester.com",
			password: "1234567890",
			orders: [{ _id: "62c772783659b31e7bef36c6" }],
		},
	]);

	console.log("Users Seeded");

	process.exit();
});
