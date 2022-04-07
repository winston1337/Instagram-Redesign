import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Wrapper from './components/explore/ExploreWrapper';
import HomePage from './pages/HomePage';
import Profile from './components/screens/Profile';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/explore" element={<Wrapper/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

