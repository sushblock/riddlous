import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules"
import Navbar from "./components/Navbar";
import Riddles from "./pages/Riddles";
import Jokes from "./pages/Jokes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/riddles" element={<Riddles />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="*" element={<Home />} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
//
