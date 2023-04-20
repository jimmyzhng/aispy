import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';


function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <NavigationBar />
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
