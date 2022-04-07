import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Wrapper from './components/explore/ExploreWrapper';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/explore" element={<Wrapper/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
