const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Auth {
		token: ID!
		user: User
	}

	type Category {
		_id: ID
		name: String
	}

	type Checkout {
		session: ID
	}

	type Course {
		_id: ID
		name: String
		decription: String
		image: String
		price: Float
		category: [Category]
	}

	type Order {
		_id: ID
		purchaseDate: String
		products: [Course]
	}
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		orders: [Order]
	}

	type Query {
		categories: [Category]
		courses: [Course]
		me: User
		order(_id: ID!): Order
		orders: [Order]
		user(_id: ID!): User
		users: [User]
	}

	type Mutation {
		addUser(
			firstName: String
			lastName: String
			email: String
			password: String
		): User
		addOrder(email: String!, orderID: ID!): Order
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
