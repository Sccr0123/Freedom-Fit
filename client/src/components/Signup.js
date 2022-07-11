import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
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

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div>
                        <div><h2>Sign Up</h2></div>
                            <div>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-group row">
                                        <label for="firstName" className="col-md-4 col-form-label text-md-right">First Name:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="firstName" className="form-control" onChange={handleChange}/>
                                            </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lastName" className="col-md-4 col-form-label text-md-right">Last Name:</label>
                                            <div className="col-md-6">
                                                <input type="text" id="lastName" className="form-control" onChange={handleChange}/>
                                            </div>
                                    </div>
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
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit">Sign Up</button>
                                    </div>
                                        <Link to="/login">← Go to Login</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
}

export default Signup;