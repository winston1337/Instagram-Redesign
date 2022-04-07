import "./App.css";
import "./components/NavFoot.css";
import InstaNav from './components/InstaNav';
import InstaFooter from './components/InstaFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      
    <Router>
    <div className="App">
      <InstaNav/>
      <Routes>
        {/* <Route path="/home" element={<HomePage/>}/>
        <Route path="/explore" element={<Wrapper/>}/> */}
      </Routes>
      <InstaFooter/>
    </div>
    </Router>
    
  );
}

export default App;
