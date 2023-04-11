import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { IoReorderThree } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  //useLocation hook to get the current path
  const location = useLocation();

  //useEffect hook to close the navbar when the path changes
  React.useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <IoClose /> : <IoReorderThree />}
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/jokes">Jokes</Link>
        <Link to="/rules">Riddles</Link>
      </div>
    </div>
  );
}

export default Navbar;
