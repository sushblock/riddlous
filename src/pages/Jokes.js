import React, { useState, useEffect, lazy, Suspense } from "react";
import { loadCategories } from "../utils/categoryUtils";
import wockaJokes from "../assets/wocka.json";
import stupidstuffJokes from "../assets/stupidstuff.json";
import redditJokes from "../assets/reddit_jokes.json";
import "../styles/Jokes.css"; // Import the CSS file for styling

const WockaJokes = lazy(() => import("../components/WockaJokes"));
const StupidstuffJokes = lazy(() => import("../components/StupidstuffJokes"));
const RedditJokes = lazy(() => import("../components/RedditJokes"));

const Jokes = () => {
  const [wockaJokeIndex, setWockaJokeIndex] = useState(0);
  const [stupidstuffJokeIndex, setStupidstuffJokeIndex] = useState(0);
  const [redditJokeIndex, setRedditJokeIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("wocka");
  const [categories, setCategories] = useState({
    wocka: [],
    stupidstuff: [],
  });

  useEffect(() => {
    // Load categories from local storage or JSON files
    const loadCategoriesData = async () => {
      const loadedCategories = await loadCategories();
      setCategories(loadedCategories);
    };
    loadCategoriesData();
  }, []);

  useEffect(() => {
    // Set the current category and reset joke indexes when category changes
    setCurrentCategory("wocka");
    setWockaJokeIndex(0);
    setStupidstuffJokeIndex(0);
    setRedditJokeIndex(0);
  }, [categories]);

  const handleNextWockaJoke = () => {
    if (wockaJokeIndex < wockaJokes.length - 1) {
      setWockaJokeIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevWockaJoke = () => {
    if (wockaJokeIndex > 0) {
      setWockaJokeIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleGoToStartWocka = () => {
    setWockaJokeIndex(0);
  };

  const handleNextStupidstuffJoke = () => {
    if (stupidstuffJokeIndex < stupidstuffJokes.length - 1) {
      setStupidstuffJokeIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevStupidstuffJoke = () => {
    if (stupidstuffJokeIndex > 0) {
      setStupidstuffJokeIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleGoToStartStupidstuff = () => {
    setStupidstuffJokeIndex(0);
  };

  const handleNextRedditJoke = () => {
    if (redditJokeIndex < redditJokes.length - 1) {
      setRedditJokeIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevRedditJoke = () => {
    if (redditJokeIndex > 0) {
      setRedditJokeIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleGoToStartReddit = () => {
    setRedditJokeIndex(0);
  };

  return (
    <div className="jokes-container">
      {/* Accordion for wocka.json */}
      <div
        className={`jokes-accordion ${currentCategory === "wocka" ? "active" : ""}`}
        onClick={() => setCurrentCategory("wocka")}
      >
        <h3>Wocka Jokes</h3>
        {currentCategory === "wocka" && (
          <Suspense fallback={<div>Loading...</div>}>
            <WockaJokes
              currentJokeIndex={wockaJokeIndex}
              handlePrevJoke={handlePrevWockaJoke}
              handleNextJoke={handleNextWockaJoke}
              handleGoToStart={handleGoToStartWocka}
            />
          </Suspense>
        )}
      </div>

      {/* Accordion for stupidstuff.json */}
      <div
        className={`jokes-accordion ${currentCategory === "stupidstuff" ? "active" : ""}`}
        onClick={() => setCurrentCategory("stupidstuff")}
      >
        <h3>Stupidstuff Jokes</h3>
        {currentCategory === "stupidstuff" && (
          <Suspense fallback={<div>Loading...</div>}>
            <StupidstuffJokes
              currentJokeIndex={stupidstuffJokeIndex}
              handlePrevJoke={handlePrevStupidstuffJoke}
              handleNextJoke={handleNextStupidstuffJoke}
              handleGoToStart={handleGoToStartStupidstuff}
            />
          </Suspense>
        )}
      </div>

      {/* Accordion for reddit_jokes.json */}
      <div
        className={`jokes-accordion ${currentCategory === "reddit" ? "active" : ""}`}
        onClick={() => setCurrentCategory("reddit")}
      >
        <h3>Reddit Jokes</h3>
        {currentCategory === "reddit" && (
          <Suspense fallback={<div>Loading...</div>}>
            <RedditJokes
              currentJokeIndex={redditJokeIndex}
              handlePrevJoke={handlePrevRedditJoke}
              handleNextJoke={handleNextRedditJoke}
              handleGoToStart={handleGoToStartReddit}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Jokes;
