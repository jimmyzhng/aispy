import './App.css';
import Auth from './components/Auth';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/auth" element={<Auth />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
