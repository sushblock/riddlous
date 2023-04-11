import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules"

function App() {
  return (
    <div className="App">
      <Router>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<Home />} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
//
