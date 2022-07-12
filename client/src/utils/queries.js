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
	query getCourses{
		courses {
			_id
			name
			description
			price
		}
	}
`;

export const QUERY_CATEGORIES = gql`
	query{
		categories {
			_id
			name
		}
	}
`;

export const QUERY_ME = gql`
	query Me{
		me{
			firstName
			lastName
			email
			orders{
				_id
			}
		}
	}`

export const QUERY_USER = gql`
	query{
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
