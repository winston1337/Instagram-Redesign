import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router"
// import ChatScreen from "./ChatScreen";
import Chat from "./components/Chat.js";
import Chats from "./components/Chats.js"
import './App.css';
import HomePage from './pages/HomePage';

import "./app.css"

function App (){
    return (
        <div className="App">
        <Router>
          <Routes>
              <Route path="/chat/:person">
                {/* <Header> */}
                <HomePage />
                  <Chat />
                    {/* <ChatScreen />   */}
                      <Chats />
                {/* </Header> */}
              </Route>
              </Routes>
        </Router>
        </div>
    )
}