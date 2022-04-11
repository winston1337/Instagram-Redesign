import "./App.css";
import "./components/NavFoot.css";
import InstaNav from "./components/InstaNav";
import InstaFooter from "./components/InstaFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/explore/ExploreWrapper";
import HomePage from "./pages/HomePage";
import Activity from "./components/activity/activity";
import Profile from "./components/screens/Profile";
import Chats from "./components/Chats.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Wrapper />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/chat" element={<Chats/>}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
