import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router"
import ChatScreen from "./ChatScreen";

import "./app.css"

function App (){
    return (
        <div className="App">
        <Router>
          <Routes>
              <Route path="/chat/:person">
                <Header>
                  <ChatScreen />  
                      <Chats />
                    
                </Header>
              </Route>
              </Routes>
        </Router>
    </div>
    )
}