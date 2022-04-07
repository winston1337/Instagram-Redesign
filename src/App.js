import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Wrapper from './components/explore/ExploreWrapper';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/explore" element={<Wrapper/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
