const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
	}

	type Query {
		user: User
		users: [User]
	}
	type Mutation {
		addUser(firstName: String, lastName: String, email: String, password: String): User
	}
`;

module.exports = typeDefs;
