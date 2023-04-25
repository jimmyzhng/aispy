import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import View from './components/View';
import PastBroadcast from './components/PastBroadcast';
import { VideoProvider } from './context/VideoContext';
import { ChartProvider } from './context/ChartContext';


function App() {

  return (
    <Router>
      <AuthProvider>
        <VideoProvider>
          <ChartProvider>
            <div className="App">
              <NavigationBar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/view/:id" element={<View />} />
                  <Route path="/pastbroadcasts" element={<PastBroadcast />} />
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
