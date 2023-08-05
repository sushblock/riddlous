import React from "react";
import redditJokes from "../assets/reddit_jokes/reddit_jokes_01.json"; // Load the first file
import { button_tags } from "../constants/properties";

const RedditJokes = ({ currentJokeIndex, handlePrevJoke, handleNextJoke, handleGoToStart }) => {
  const joke = redditJokes[currentJokeIndex];

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

export default RedditJokes;
