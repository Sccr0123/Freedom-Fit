const db = require("../config/connection");
const { User, Course, Category } = require("../models");

db.once("open", async () => {
	/* await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Physical Fitness' },
    { name: 'Nutrtion' },
    { name: 'Mental Wellness' }
  ]);

  console.log('categories seeded');

  await Course.deleteMany();

  const courses = await Course.insertMany([
    {
      name: '28 to Physical Freedom',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'physical-cover.jpg',
      category: categories[0]._id,
      price: 12.99
    },
    {
      name: 'Eat Freely',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'nutrition-cover.jpg',
      category: categories[1]._id,
      price: 14.99
    },
    {
      name: 'Free from Our Vices',
      category: categories[2]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'wellness-cover.jpg',
      price: 17.99
    }
  ]);

  console.log('courses seeded');
*/

	await User.deleteMany();

	await User.create({
		firstName: "Pamela",
		lastName: "Washington",
		email: "pamela@testmail.com",
		password: "password12345",
		/*orders: [
      {
        courses: [courses[0]._id]
      }
    ]*/
	});

	await User.create({
		firstName: "Elijah",
		lastName: "Holt",
		email: "eholt@testmail.com",
		password: "password12345",
	});

	await User.create({
		firstName: "Mister",
		lastName: "Tester",
		email: "test@tester.com",
		password: "1234567890",
		/*orders: [
      {
        courses: [courses[0]._id, courses[1]._id, courses[2]._id]
      }
    ]*/
	});

	console.log("users seeded");

	process.exit();
});
