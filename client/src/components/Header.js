import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/helpers";

// import Auth from "../../utils/auth";

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
          <h1>FreedomFit</h1>
        </Link>

        <nav className="text-center">
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
