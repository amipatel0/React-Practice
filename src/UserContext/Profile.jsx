import React, { useContext } from 'react';
import ContextAuth from './ContextAuth';
import './Profile.css';

const Profile = () => {
  const { user } = useContext(ContextAuth);

  return (
    <div className="profile-main">
    <div className="profile-container">
      {user ? (
        <div className="profile-content">
          <div className="profile-image">
            <img src='/images/profile.jpeg' alt='Profile Image'/>
          </div>
          <div className="profile-info">
            <h2><b><u>Profile</u></b></h2>
            <p><b><i>Username:</i></b> {user.username}</p>
            <p><b><i>Email ID:</i></b> {user.email}</p>
            <p><b><i>Contact Number:</i></b> {user.cno}</p>
          </div>
        </div>
      ) : (
        <p className="login-message">
          Please log in to see Profile.
        </p>
      )}
    </div>
  </div>
   );
};

export default Profile;
