import React, { useContext } from 'react';
import ContextAuth from './ContextAuth';
import './Profile.css';

const Profile = () => {
  const { user } = useContext(ContextAuth);

  return (
    <div className="profile-main">
      <div className="profile-container">
        {user ? (
          <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
            <p>Password:{user.password}</p>
            <p>Email ID:{user.email}</p>
          </div>
        ) : (
          <p className="login-message">Please log in to see your profile.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
