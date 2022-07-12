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
