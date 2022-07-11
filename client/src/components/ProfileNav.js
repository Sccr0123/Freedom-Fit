import React from 'react';
import { Link } from 'react-router-dom';

function ProfileNav() {
  return (
    <aside className="nav-sidebar">
        <nav className="account-navigation">
            <Link to={`/profile/:id`}>Dashboard</Link>
            <Link to={`/profile/:id/info`}>My Info</Link>
        </nav>
  </aside>
  )
}

export default ProfileNav;