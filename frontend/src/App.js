import './App.css';
import Auth from './Auth';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import View from './components/View';
import PastBroadcast from './components/PastBroadcast';


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
              <Route path="/view" element={<View />} />
              <Route path="/pastbroadcasts" element={<PastBroadcast />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
