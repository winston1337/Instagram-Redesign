<<<<<<< HEAD
import "./App.css";
import "./components/NavFoot.css";
// import InstaNav from './components/InstaNav';
import InstaFooter from './components/InstaFooter';
=======
import React from "react"
>>>>>>> 21addc99d79ef2136424a5fcf25d0b61f21d8949
import Chats from "./components/Chats.js"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Wrapper from './components/explore/ExploreWrapper';
import HomePage from './pages/HomePage';
import Profile from './components/screens/Profile';
<<<<<<< HEAD

=======
import Contact from "./components/contact/Contact.jsx";
// import InstaFooter from "./components/InstaFooter.js";
>>>>>>> 21addc99d79ef2136424a5fcf25d0b61f21d8949

function App (){
    return (
        <div className="App">
          <Router>
            {/* <InstaNav/> */}
            <Routes>
              <Route path="/" element={<Navigate to="/home" />}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/explore" element={<Wrapper/>}/>
              <Route path="/chat" element={<Chats/>}/>
<<<<<<< HEAD
              <Route path="/profile" element={<Profile/>}/>
=======
              <Route path="/contact" element={<Contact/>}/>

>>>>>>> 21addc99d79ef2136424a5fcf25d0b61f21d8949
            </Routes>
            {/* <InstaFooter/> */}
          </Router>
        </div>
    )
}
export default App;
