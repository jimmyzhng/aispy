import { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch('http://localhost:3001/api/session', { credentials: 'include' });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      }
    }

    fetchSession();
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <NavigationBar user={user} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
