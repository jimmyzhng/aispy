import axios from "axios";

axios.defaults.withCredentials = true;

export const changeAuthMode = (setError, setAuthMode, authMode) => {
  setError(null);
  setAuthMode(authMode === "login" ? "register" : "login");
};

export const handleUsernameChange = (e, setUsername) => {
  setUsername(e.target.value);
};

export const handleEmailChange = (e, setEmail) => {
  setEmail(e.target.value);
};

export const handlePasswordChange = (e, setPassword) => {
  setPassword(e.target.value);
};

export const handleLogin = (e, setIsLoggedIn, setError, username, password, navigate) => {
  e.preventDefault();

  axios
    .post("http://localhost:3001/api/login", { username, password })
    .then(() => {
      setIsLoggedIn(true);
      navigate('/');
    })
    .catch((err) => setError(err.response.data));
};

export const handleSignUp = (e, setIsLoggedIn, setError, email, username, password, navigate) => {
  e.preventDefault();

  axios
    .post("http://localhost:3001/api/users", { email, username, password })
    .then(() => {
      setIsLoggedIn(true);
      navigate('/');
    })
    .catch((err) => setError(err.response.data));
};