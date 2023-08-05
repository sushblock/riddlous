import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Home from "./pages/Home";
//import Rules from "./pages/Rules"
import Navbar from "./components/Navbar";
//import Riddles from "./pages/Riddles";
//import Jokes from "./pages/Jokes";

const Jokes = lazy(() => import("./pages/Jokes"));
const Rules = lazy(() => import("./pages/Rules"));
const Riddles = lazy(() => import("./pages/Riddles"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/riddles" element={<Riddles />} />
            <Route path="/jokes" element={<Jokes />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
//
