import React from "react";
import { rules } from "../assets/data";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <div className="App-header">
      <h1>Here are the Rules!</h1>
      <ol>
        {rules.map((item, number) => {
          return (
            <li key={number}
            >
              {item.description}
            </li>
          );
        })}
      </ol>
      <Link to="/rules" className="button">
        Let's Start!
      </Link>
    </div>
  );
}

export default Rules;
