import React, { createContext, useState } from 'react';

const ContextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username,email,cno) => {
    setUser({ username ,email,cno});
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
