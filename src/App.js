import "./App.css";
import "./components/NavFoot.css";
import InstaNav from "./components/InstaNav";
import InstaFooter from "./components/InstaFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/explore/ExploreWrapper";
import HomePage from "./pages/HomePage";
import Activity from "./components/activity/activity";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Wrapper />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
