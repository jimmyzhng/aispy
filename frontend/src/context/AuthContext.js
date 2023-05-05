import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/login')
      .then(res => {
        setIsLoggedIn(res.data.isLoggedIn);
        setUser(res.data.user);
      })
      .catch(err => console.log(err));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{
      isLoggedIn, setIsLoggedIn,
      user, setUser,
      error, setError
    }}>
      {children}
    </AuthContext.Provider>
  );
}