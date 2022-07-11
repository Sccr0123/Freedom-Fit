import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {

    const [formState, setFormState] = useState({ email: '', password: '' });
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

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header"><h2>Login</h2></div>
                            <div className="card-body">
                                <form onSubmit={handleFormSubmit} className="login-form">
                                    <div className="form-group row">
                                        <label for="email" className="col-md-4 col-form-label text-md-right">Email:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email" className="form-control" onChange={handleChange}/>
                                            </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="password" className="col-md-4 col-form-label text-md-right">Password:</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" onChange={handleChange}/>
                                            </div>
                                    </div>
                                    {error ? (
                                        <div>
                                            <p className="error-text">The provided credentials are incorrect</p>
                                        </div>
                                    ) : null}
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit">Sign In</button>
                                    </div>
                                        <Link to="/signup">← Go to Signup</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
}

export default Login;