import { useState } from "react";
import axios from "axios";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

axios.defaults.withCredentials = true;

export default function Auth() {
  const [authMode, setAuthMode] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  const navigate = useNavigate();

  const changeAuthMode = () => {
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
        auth.setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/users", { email, username, password })
      .then(() => {
        auth.setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
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
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
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
              className="btn btn-primary"
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
