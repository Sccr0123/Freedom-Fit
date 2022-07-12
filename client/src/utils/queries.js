import { gql } from "@apollo/client";

export const QUERY_COURSES = gql`
	query getCourses($category: ID) {
	courses(category: $category) {
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
{
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
			orders {
				_id
				purchaseDate
				courses {
					_id
					name
					description
					price
					quantity
					image
				}
			}
		}
	}
`;
