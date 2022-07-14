const db = require("../config/connection");
const { User, Course, Category, Order } = require("../models");

db.once("open", async () => {
	await Category.deleteMany();

	const categories = await Category.insertMany([
		{ name: "Physical Fitness" },
		{ name: "Mental Wellness" },
		{ name: "Nutrtion" },
	]);

	console.log("Categories seeded");

	await Course.deleteMany();

	const courses = await Course.insertMany([
		{
			name: 'Conditioning and Flexibility',
			description:
				'This course provides knowledge, skill, and application of methods to maintain and improve overall aerobic fitness and flexibility. Various cardiovascular activities, circuit training and static and dynamic stretching will be used. Programs such as high intensity training, TRX and other current exercise trends may be incorporated.',
			image: 'conditioning.JPG',
			price: 199,
			category: categories[0]._id
		},
		{
			name: 'Pilates',
			description:
				'Pilates is a form of exercise which concentrates on strengthening the body with an emphasis on core strength. This helps to improve general fitness and overall well-being. Similar to Yoga, Pilates concentrates on posture, balance and flexibility.',
			image: 'pilates.JPG',
			price: 199,
			category: categories[0]._id
		},
		{
			name: 'Water Fitness',
			description:
				'The pool is great for exercise because the water offers resistance while reducing the impact of land-based exercises. Our water fitness classes use a variety of exercises and equipment. Activities may include dance, calisthenics, walking, and kicking, and typically intensity and impact can be varied on an individual basis.',
			image: 'waterfitness.JPG',
			price: 199,
			category: categories[0]._id
		},
		{
			name: 'Meditation and Spirituality',
			description:
				'Your mind as consciousness creates your reality, you can do some very powerful and amazing things. This course is designed to take you on a journey of mind-body mastery starting with the basics of mindfulness and meditation, and then advancing to working with your subconscious mind to facilitate healing.',
			image: 'meditation.JPG',
			price: 99,
			category: categories[1]._id
		},
		{
			name: 'Nutrition and Health',
			description:
				'You will learn about the composition of macro- and micronutrients, their role in the body, and their impact on our health. You will get a sound understanding of energy homeostasis and the regulation of bodyweight. Also, you will learn strategies to improve nutritional status, and combat overnutrition and undernutrition based on scientific knowledge.',
			image: 'nutritionhealth.JPG',
			price: 99,
			category: categories[2]._id
		},
		{
			name: 'Physical Therapy Session',
			description:
				'We will evaluate your condition and develop a care plan that guides your therapy. It will include your personal goals like functioning and feeling better, plus exercises or other treatments to help you reach them. We will perform hands-on treatments for your symptoms. We will also teach you special exercises to help you move and function better.',
			image: 'ptsession.JPG',
			price: 99,
			category: categories[0]._id
		}
	]);

	console.log('Courses seeded');

		// await Order.deleteMany();

	// await Order.create({
	// 	courses: [
	// 		{ _id: "62c7717a75cadb644f95f57f" },
	// 		{ _id: "62c7717a75cadb644f95f580" },
	// 		{ _id: "62c7717a75cadb644f95f581" },
	// 	],
	// });

	// console.log("Orders Seeded");

	// await User.deleteMany();

	// await User.create({
	// 	firstName: 'Pamela',
	// 	lastName: 'Washington',
	// 	email: 'pamela@testmail.com',
	// 	password: 'password12345',
	// 	// orders: [
	// 	// 	{
	// 	// 		courses: [courses[0]._id, courses[0]._id, courses[1]._id]
	// 	// 	}
	// 	// ]
	// });

	// const users = await User.insertMany([
	// 	{
	// 		firstName: "Pamela",
	// 		lastName: "Washington",
	// 		email: "pamela@testmail.com",
	// 		password: "password12345",
	// 		// orders: [],
	// 	},
	// 	{
	// 		firstName: "Elijah",
	// 		lastName: "Holt",
	// 		email: "eholt@testmail.com",
	// 		password: "password12345",
	// 		// orders: [],
	// 	},
	// 	{
	// 		firstName: "Mister",
	// 		lastName: "Tester",
	// 		email: "test@tester.com",
	// 		password: "1234567890",
	// 		// orders: [{ _id: "62c772783659b31e7bef36c6" }],
	// 	},
	// ]);

	// console.log("Users Seeded");

	process.exit();
});
