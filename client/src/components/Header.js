import React from "react";
import { Link } from "react-router-dom";

import Cart from "../components/Cart";

// import { capitalizeFirstLetter } from "../utils/helpers";

// const Navigation = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

const Header = () => {
	return (
		<header className="bg-danger mb-4 py-2 flex-row align-center">
			<div className="container flex-row justify-space-between-lg justify-center align-center">
				<Link to="/">
					<h1>Freedom Fit</h1>
				</Link>

				<nav className="d-flex">
					<div>
						<Link to="/about">About</Link>
					</div>

					<div>
						<Link to="/courses">Courses</Link>
					</div>
					{/* <Link to="/cart"></Link> */}
					<div>
						<Link to="/login">Login</Link>
					</div>
					<div>
						<Link to="/signup">Signup</Link>
					</div>
					<Cart />
				</nav>
			</div>
		</header>
	);
};

export default Header;
