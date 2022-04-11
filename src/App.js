import "./App.css";
import "./components/NavFoot.css";
// import InstaNav from './components/InstaNav';
import InstaFooter from './components/InstaFooter';
import Chats from "./components/Chats.js"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Wrapper from './components/explore/ExploreWrapper';
import HomePage from './pages/HomePage';
import Profile from './components/screens/Profile';


function App (){
    return (
        <div className="App">
          <Router>
            {/* <InstaNav/> */}
            <Routes>
              <Route path="/" element={<Navigate to="/home" />}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/explore" element={<Wrapper/>}/>
              <Route path="/chat" element={<Chats/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <InstaFooter/>
          </Router>
        </div>
    )
}

export default App;

