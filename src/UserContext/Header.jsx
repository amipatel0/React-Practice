import React, { useContext } from 'react';
import ContextAuth from './ContextAuth';
import './Header.css';


const Header = () => {
  const { user, login, logout } = useContext(ContextAuth);

  return (
    <header>
      <h1>Welcome to Our Page</h1>
      {user ? (
        <div>
          <span>Hello, {user.username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login('Ami','abc@gmail.com','1234567890')}>Login</button>
      )}
    </header>
  );
};

export default Header;
