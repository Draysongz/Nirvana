import { useState, useEffect } from 'react';
import React from 'react';
import jwt_decode from 'jwt-decode';

let authContext = null;

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      try {
        const decoded = jwt_decode(token);

        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        
        }
      } catch (err) {
        // handle error
        console.log(err)
      }
    }
  }, []);

  authContext = {
    isAuthenticated,
    login: () => {
      setIsAuthenticated(true);
      localStorage.setItem("jwt", "token");
    },
    logout: () => {
      setIsAuthenticated(false);
      localStorage.removeItem("jwt");
    },
  };

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
