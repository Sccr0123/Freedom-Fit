import React from "react";
import "bootstrap";
import "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import { StoreProvider } from "./utils/GlobalState";
import NoMatch from "./components/NoMatch";

//Pages
import Success from "./pages/Success"
import CourseList from "./pages/CourseList";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Info from "./components/Info";

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const httpLink = createHttpLink({
	uri: "/graphql",
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="flex-column justify-flex-start min-100-vh">
					<StoreProvider>
						<Header />
						<div className="container">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route
									path="/courses"
									element={<CourseList />}
								/>
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
								<Route path="/profile" element={<Profile />} />
								<Route path="/success" element={<Success />} />
								<Route path="*" element={<NoMatch />} />
							</Routes>
						</div>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
