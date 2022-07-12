import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login container d-flex justify-content-center">
      <div className="row"></div>
      <div className="col-md-5">
        <div className="login card card-01">
          <Link
            to="/login"
            type="submit"
            className="btn btn-default text-uppercase"
          >
            ← Go to Login
          </Link>
          <div className="card-body">
            <span className="badge-box">
              <i className="fa fa-check"></i>
            </span>

            <h2 className="card-title">Signup</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="flex-row space-between my-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                  className="input"
                  placeholder="First Name"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  className="input"
                  placeholder="Last Name"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="email">Email:</label>
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="pwd">Password:</label>
                <input
                  className="input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row flex-end">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
