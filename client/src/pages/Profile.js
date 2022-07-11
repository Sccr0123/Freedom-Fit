import React from 'react';
import PurchasedCourses from '../components/PurchasedCourses';
import ProfileNav from '../components/ProfileNav';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }
  
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="my-account">
    <ProfileNav/>
    <div className="my-account__body">
      <div className="account-dashboard">
        <h1>Hi, {user.firstName}</h1>
        <PurchasedCourses/>
      </div> 
    </div>
  </div>
  )
}

export default Profile;