import React, { createContext, useState, useContext } from 'react';

// Create a context object
const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  // Define the context value you want to share
  const value = {
    isLogin,
    setLogin,
    user,
    setUser,
  };

  // Wrap children with the AuthContext provider and pass down the value
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
