import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';

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
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Account Login</div>
                            <div class="card-body">
                                <form onSubmit={handleFormSubmit} class="login-form">
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">Email:</label>
                                            <div class="col-md-6">
                                                <input type="text" id="email" class="form-control"/>
                                            </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password:</label>
                                            <div class="col-md-6">
                                                <input type="password" id="password" class="form-control"/>
                                            </div>
                                    </div>
                                    {error ? (
                                        <div>
                                            <p className="error-text">The provided credentials are incorrect</p>
                                        </div>
                                    ) : null}
                                    <div class="col-md-6 offset-md-4">
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