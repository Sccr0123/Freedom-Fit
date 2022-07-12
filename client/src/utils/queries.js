import { gql } from "@apollo/client";

export const QUERY_COURSE = gql`
	query getCourse($category: ID) {
	course(category: $category) {
	_id
	name
	description
	price
	image
	category {
		_id
	}
	}
}
`;

export const QUERY_ALL_COURSES = gql`
	query{
		courses {
			_id
			name
			description
			price
			category {
				name
			}
		}
	}
`;

export const QUERY_CATEGORIES = gql`
	{
		categories {
			_id
			name
		}
	}
`;

export const QUERY_USER = gql`
	{
		user {
			firstName
			lastName
			email
		}
	}
`;

export const QUERY_CHECKOUT = gql`
	query getCheckout($products: [ID]!) {
		checkout(products: $products) {
			session
		}
	}
`;
