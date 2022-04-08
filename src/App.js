import React from "react"
// import {BrowserRouter as Router, Routes, Route} from "react-router"
// import ChatScreen from "./ChatScreen";
// import Chat from "./components/Chat.js";
import Chats from "./components/Chats.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Wrapper from './components/explore/ExploreWrapper';
import HomePage from './pages/HomePage';




function App (){
    return (
        <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/explore" element={<Wrapper/>}/>
            <Route path="/chat" element={<Chats/>}>
              
                  
              </Route>
              </Routes>
        </Router>
        </div>
    )
}

export default App;