import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, idbPromise } from "../utils/helpers";
import Cart from "../components/Cart";

// const Navigation = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

const Header = () => {
  return (
    <header className="mb-4 py-2 flex-row align-center">
      <div className="d-flex justify-content-between px-4 header-cont">
        <Link to="/" className="p-3">
          <h1>FreedomFit</h1>
        </Link>

        <nav className="d-flex">
          <div className="p-3">
            <Link to="/about">About</Link>
          </div>

          <div className="p-3">
            <Link to="/courses">Courses</Link>
          </div>
          {/* <Link to="/cart"></Link> */}
          <div className="p-3">
            <Link to="/login">Login</Link>
          </div>
          <div className="p-3">
            <Link to="/signup">Signup</Link>
          </div>
          <Cart />
        </nav>
      </div>
    </header>
  );
};

export default Header;
