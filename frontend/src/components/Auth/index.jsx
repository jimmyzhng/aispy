import { useState } from "react";
import axios from "axios";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { RiErrorWarningFill } from "react-icons/ri";

axios.defaults.withCredentials = true;

export default function Auth() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    authMode,
    setAuthMode,
    setError,
    error,
    setIsLoggedIn,
  } = useAuth();

  const navigate = useNavigate();

  const changeAuthMode = () => {
    setError(null);
    setAuthMode(authMode === "login" ? "register" : "login");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/login", { username, password })
      .then(() => {
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => setError(err.response.data));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/users", { email, username, password })
      .then(() => {
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => setError(err.response.data));
  };

  return (
    <div className="Auth-form-page">
      <form className="Auth-form">
        {error && (
          <div className="Auth-error">
            <RiErrorWarningFill /> {`Error: ${error}`}
          </div>
        )}
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            {authMode === "login" ? "Login" : "Register"}
          </h3>

          <div className="text-center">
            {authMode === "login" ? (
              <p>
                {" "}
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </p>
            ) : (
              <p>
                {" "}
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Login
                </span>
              </p>
            )}
          </div>

          {authMode === "register" && (
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          )}

          <div className="form-group mt-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn"
              onClick={authMode === "login" ? handleLogin : handleSignUp}
            >
              {authMode === "login" ? "Login" : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
