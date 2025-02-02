import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      correctAnswer: "New Delhi",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(""); // Reset selection for next question
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h2>Quiz Time! 🧠</h2>
      {showScore ? (
        <h3>Your Score: {score} / {questions.length}</h3>
      ) : (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name="quiz"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label>{option}</label>
            </div>
          ))}
          <button onClick={handleSubmit} disabled={!selectedOption}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
