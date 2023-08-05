import React from "react";
import wockaJokes from "../assets/wocka.json";
import { button_tags } from "../constants/properties";

const WockaJokes = ({ currentJokeIndex, handlePrevJoke, handleNextJoke, handleGoToStart }) => {
  const joke = wockaJokes[currentJokeIndex];
  
  return (
    <>
      {/* Display current joke */}
      <p>{joke?.title}</p>
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

export default WockaJokes;
