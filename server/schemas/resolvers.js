const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const resolver = {
	Query: {
		users: async () => {
			const users = User.find().sort({ createdAt: -1 });
			return users;
		},
		user: async (parent, { _id }) => {
			const user = User.findOne({ _id });
			return user;
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
