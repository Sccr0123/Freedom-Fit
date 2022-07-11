import { useReducer } from "react";

import {
	UPDATE_COURSES,
	UPDATE_CATEGORIES,
	UPDATE_CURRENT_CATEGORY,
	ADD_TO_CART,
	ADD_MULTIPLE_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_CART_QUANTITY,
	CLEAR_CART,
	TOGGLE_CART,
} from "../utils/actions";

export const reducer = (state, action) => {
	switch (action.type) {
		// if action type value is the value of `UPDATE_COURSES`, return a new state object with an updated COURSES array
		case UPDATE_COURSES:
			return {
				...state,
				courses: [...action.courses],
			};
		// if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
		case UPDATE_CATEGORIES:
			return {
				...state,
				categories: [...action.categories],
			};

		case UPDATE_CURRENT_CATEGORY:
			return {
				...state,
				currentCategory: action.currentCategory,
			};

		case ADD_TO_CART:
			return {
				...state,
				cartOpen: true,
				cart: [...state.cart, action.course],
			};

		case ADD_MULTIPLE_TO_CART:
			return {
				...state,
				cart: [...state.cart, ...action.courses],
			};

		case REMOVE_FROM_CART:
			let newState = state.cart.filter((course) => {
				return course._id !== action._id;
			});

			return {
				...state,
				cartOpen: newState.length > 0,
				cart: newState,
			};

		case UPDATE_CART_QUANTITY:
			return {
				...state,
				cartOpen: true,
				cart: state.cart.map((course) => {
					if (action._id === course._id) {
						course.purchaseQuantity = action.purchaseQuantity;
					}
					return course;
				}),
			};

		case CLEAR_CART:
			return {
				...state,
				cartOpen: false,
				cart: [],
			};

		case TOGGLE_CART:
			return {
				...state,
				cartOpen: !state.cartOpen,
			};

		default:
			return state;
	}
};

export function useCourseReducer(initialState) {
	return useReducer(reducer, initialState);
}
