import React from "react";
import stupidstuffJokes from "../assets/stupidstuff.json";
import { button_tags } from "../constants/properties";

const StupidstuffJokes = ({ currentJokeIndex, handlePrevJoke, handleNextJoke, handleGoToStart }) => {
  const joke = stupidstuffJokes[currentJokeIndex];
  
  return (
    <>
      {/* Display current joke */}
      <p>{joke?.body}</p>
      <div className="jokes-navigation">
        <button onClick={handlePrevJoke} className="button">
          {button_tags.prev}
        </button>
        <button onClick={handleNextJoke} className="button">
          {button_tags.next}
        </button>
        <button onClick={handleGoToStart} className="button">
          {button_tags.go_to_start}
        </button>
      </div>
    </>
  );
};

export default StupidstuffJokes;
