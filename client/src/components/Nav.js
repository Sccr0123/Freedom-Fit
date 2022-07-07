import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  return (
    <header className="d-flex px-1 p-3 justify-content-between align-items-center bg-danger text-light px-3">
      <h1>Freedom Fit</h1>
      <span>Login</span>
    </header>
  );
}

export default Nav;
