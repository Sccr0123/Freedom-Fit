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

import Header from "./components/Header";
import { StoreProvider } from "./utils/GlobalState";

//Pages
import CourseOverview from "./components/CourseOverview";
import CourseSingleView from "./components/CourseSingleView";
import Home from "./pages/Home";
import About from "./pages/About";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const client = new ApolloClient({
	link: httpLink,
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
								<Route path="/login" element={<Home />} />
								<Route path="/signup" element={<Home />} />
							</Routes>
						</div>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
