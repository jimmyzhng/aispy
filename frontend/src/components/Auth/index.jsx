import "./index.scss";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  changeAuthMode,
  handleUsernameChange,
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
  handleSignUp,
} from "../../utils/authHelpers";

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
                <span
                  className="link-primary"
                  onClick={() =>
                    changeAuthMode(setError, setAuthMode, authMode)
                  }
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p>
                {" "}
                Already registered?{" "}
                <span
                  className="link-primary"
                  onClick={() =>
                    changeAuthMode(setError, setAuthMode, authMode)
                  }
                >
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
                onChange={(e) => handleEmailChange(e, setEmail)}
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
              onChange={(e) => handleUsernameChange(e, setUsername)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => handlePasswordChange(e, setPassword)}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn"
              onClick={(e) => {
                authMode === "login"
                  ? handleLogin(
                      e,
                      setIsLoggedIn,
                      setError,
                      username,
                      password,
                      navigate
                    )
                  : handleSignUp(
                      e,
                      setIsLoggedIn,
                      setError,
                      email,
                      username,
                      password,
                      navigate
                    );
              }}
            >
              {authMode === "login" ? "Login" : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
