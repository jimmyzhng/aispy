import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authMode, setAuthMode] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Auth Login Form
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      authMode, setAuthMode,
      isLoggedIn, setIsLoggedIn,
      user, setUser,
      error, setError,
      username, setUsername,
      email, setEmail,
      password, setPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}