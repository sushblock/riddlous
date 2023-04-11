import logo from "../logo.png";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/rules" className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WELCOME TO THE RIDDLER!!</h1>
        <p>
          This App will entertain you anywhere you go and anytime you are bored.
        </p>
      </Link>
    </div>
  );
}

export default Home;
