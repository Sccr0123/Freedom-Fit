import React from 'react';
import { useParams } from 'react-router-dom';
import PurchasedCourses from '../components/PurchasedCourses';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { email: userParam }
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    {Auth.loggedIn() ? (
    <div className="my-account">
    <div className="my-account__body">
      <div className="account-dashboard">
        <h2>Hi, {user.email}</h2>
        <PurchasedCourses/>
      </div> 
    </div>
  </div>
    ) : (
      <div><p className="bg-dark text-light p-3">You must be signed to view this page.</p>
      <Link to={`/login`}>Login here</Link>
      </div>
    )}
  </div>
  )
}

export default Profile;
