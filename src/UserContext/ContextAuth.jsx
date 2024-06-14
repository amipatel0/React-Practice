import React, { createContext, useState } from 'react';

const ContextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username,password,email) => {
    setUser({ username ,password,email});
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <ContextAuth.Provider value={{ user, login, logout }}>
      {children}
    </ContextAuth.Provider>
  );
};

export default ContextAuth;
