const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const resolver = {
	Query: {
		me: async (parent, args) => {
			const userData = await User.findOne({}).select("-__v -password");

			return userData;
		},
		user: async (parent, { _id }) => {
			const user = User.findOne({ _id });
			return user;
		},
		users: async () => {
			const users = User.find().sort({ createdAt: -1 });
			return users;
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			return { user };
		},
	},
};

module.exports = resolver;
