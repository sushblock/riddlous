import React from "react";
import { rules } from "../assets/data";
import { Link } from "react-router-dom";
import OIG from '../assets/OIG.jpg'

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
      <Link to="/riddles" className="button">
        Let's Start!        
      </Link>
      <img src={OIG} alt="Let's Start"/>
    </div>
  );
}

export default Rules;
