import "./App.css";
import "./components/NavFoot.css";
import InstaNav from './components/InstaNav';
import InstaFooter from './components/InstaFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './components/explore/ExploreWrapper';
import HomePage from './pages/HomePage';


function App() {
  return (
    
      
    <Router>
    <div className="App">
      <InstaNav/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/explore" element={<Wrapper/>}/>
      </Routes>
      <InstaFooter/>
    </div>
    </Router>
  )
      }
export default App