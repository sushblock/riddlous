import React, { useState, useEffect } from "react";
import { riddles } from "../assets/riddle_data";
import Wow from "../assets/Wow.webp"


const Riddles = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Load questions from JSON file or API and set the state
    const loadQuestions = async () => {
      const data = riddles;
      setQuestions(data);
    };
    loadQuestions();
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setShowAnswer(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App-header">
      <h1>{currentQuestion?.question}</h1>
      {showAnswer && <p>{currentQuestion?.answer}</p>}
      {showAnswer ? (
        <img src={Wow} alt="Ohh My God"/>
      ) : (
        <div className="justVerticalPadding"><button onClick={() => setShowAnswer(true)} className="button">Show Answer</button></div>
      )}
      {currentQuestionIndex < questions.length - 1 && (
        <div><button onClick={handleNextQuestion} className="button">Next</button></div>
      )}
    </div>
  );
};

export default Riddles;
