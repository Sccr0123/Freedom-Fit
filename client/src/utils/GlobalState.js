import React, { createContext, useContext } from "react";
import { useCourseReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useCourseReducer({
		courses: [],
		cart: [],
		cartOpen: false,
		categories: [],
		currentCategory: "",
	});
	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };