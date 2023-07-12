import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import View from './components/View';
import PastBroadcast from './components/PastBroadcast';
import { VideoProvider } from './context/VideoContext';
import { ChartProvider } from './context/ChartContext';


function App() {

  const auth = useAuth();

  return (
    <Router>
      <AuthProvider>
        <VideoProvider>
          <ChartProvider>
            <div className="App" data-testid="app">
              <NavigationBar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/view/:id" element={<View />} />
                  {auth.isLoggedIn ? <Route path="/pastbroadcasts" element={<PastBroadcast />} /> :
                    <Navigate to="/auth" />
                  }
                  {auth.isLoggedIn ? <Route path="/pastbroadcasts/:id" element={<View />} /> :
                    <Navigate to="/auth" />
                  }
                </Routes>
              </div>
            </div>
          </ChartProvider>
        </VideoProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
