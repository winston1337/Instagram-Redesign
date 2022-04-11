import React from "react"
import Chats from "./components/Chats.js"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Wrapper from './components/explore/ExploreWrapper';
import HomePage from './pages/HomePage';
import Profile from './components/screens/Profile';
import Contact from "./components/contact/Contact.jsx";




function App (){
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/explore" element={<Wrapper/>}/>
              <Route path="/chat" element={<Chats/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Router>
        </div>
    )
}

export default App;
