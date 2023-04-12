import React, { useState, useEffect } from "react";
import { riddles } from "../assets/riddle_data";
import Wow from "../assets/Wow.webp";
import { button_tags } from "../constants/properties";

const Riddles = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Load questions from JSON file or API and set the state
    const loadQuestions = async () => {
      const data = riddles;
      setQuestions(data);
    };
    loadQuestions();
  }, []);

  useEffect(() => {
    // Reset showAnswer state and set timer for 10 seconds
    setShowAnswer(false);
    const timer = setTimeout(() => {
      setShowAnswer(true);
    }, 10000);

    // Clear timer if component unmounts or user moves to next question
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  useEffect(() => {
    setCountdown(10);
    const timerClock = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear timer if component unmounts or user moves to next question
    return () => {
      clearInterval(timerClock);
    };
  }, [currentQuestionIndex]);

  useEffect(() => {
    // Save currentQuestionIndex to local storage when the user closes the app
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(
        "currentQuestionIndex",
        JSON.stringify(currentQuestionIndex)
      );
    });
  }, [currentQuestionIndex]);

  useEffect(() => {
    // Load current question index from local storage if exists
    const storedIndex = localStorage.getItem("currentQuestionIndex");
    if (storedIndex) {
      setCurrentQuestionIndex(parseInt(storedIndex));
    }
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1)
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0)
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div className="App-header">
      <h1>{currentQuestion?.question}</h1>
      {showAnswer && <h2>{currentQuestion?.answer}</h2>}
      {showAnswer ? (
        <img src={Wow} alt="Ohh My God" />
      ) : (
        <>
          {countdown > 0 && <p className="timer">{countdown}</p>}
          <button onClick={() => setShowAnswer(true)} className="button">
            {button_tags.show}
          </button>
        </>
      )}
      <div className="verticalPaddingTop">
        <button onClick={handlePrevQuestion} className="button">
          {button_tags.prev}
        </button>
        <button onClick={handleNextQuestion} className="button">
          {button_tags.next}
        </button>
      </div>
    </div>
  );
};

export default Riddles;
