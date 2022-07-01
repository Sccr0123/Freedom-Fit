const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const resolver = {
	Query: {
		users: async () => {
			return User.find().sort({ createdAt: -1 });
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			return { user };
		},
	},
};
