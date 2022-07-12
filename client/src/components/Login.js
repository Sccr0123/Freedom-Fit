import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
            type="submit"
            to="/signup"
            className="btn btn-default text-uppercase"
          >
            ← Go to Signup
          </Link>
          <div className="card-body">
            <span className="badge-box">
              <i className="fa fa-check"></i>
            </span>

            <h2 className="card-title">Log in to your account</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="flex-row space-between">
                <label htmlFor="email">Email Address:</label>
                <input
                  className="input"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between">
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
              {error ? (
                <div>
                  <p className="error-text">
                    The provided credentials are incorrect
                  </p>
                </div>
              ) : null}
              <div className="flex-row flex-end">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
