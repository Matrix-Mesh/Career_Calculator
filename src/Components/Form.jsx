import job_or_business from '../images/job_or_business.png';
import work_or_travel from '../images/work_or_travel.png';
import computers_and_tech from '../images/computers_and_tech.png';
import hand_drawing from '../images/hand_drawing.png';
import puzzle_solving from '../images/puzzle_solving.png';

// import './App.css';
// import '.'
import React, { useState } from 'react';

const questions = [
  {
    question: 'Would you prefer job over starting your own business?',
    image: job_or_business,
  },
  {
    question: 'Would you want a job where you get to travel and see different places?',
    image: work_or_travel,
  },
  {
    question: 'Would you enjoy a job where you get to work with computers and technology?',
    image: computers_and_tech,
  },
  {
    question: 'Do you like to draw or create things with your hands?',
    image: hand_drawing,
  },
  {
    question: 'Do you like to solve puzzles and figure things out?',
    image: puzzle_solving,
  },
  // Add more questions and images here
];

function Form() {
  const [answers, setAnswers] = useState({});
  
  const handleOptionChange = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can access the answers using the 'answers' state
    console.log(answers);
  };

  return (
    <div id = "Form" className="interactive-form">
      <div className="form-title">Fill to analyze carrier options.</div>
      {questions.map((item, index) => (
        <div key={index} className="question-container">
          <div className="image-container">
            <img src={item.image} alt={`Question ${index + 1}`} className="image" />
          </div>
          <h2 className="question">{item.question}</h2>
          <div className="options-container">
            <label className="option-label">
              <input
                type="radio"
                name={`question-${index}`}
                value="Yes"
                checked={answers[index] === 'Yes'}
                onChange={() => handleOptionChange(index, 'Yes')}
              />
              <span className="custom-radio"></span>
              <span className="option-text">Yes</span>
            </label>
            <label className="option-label">
              <input
                type="radio"
                name={`question-${index}`}
                value="No"
                checked={answers[index] === 'No'}
                onChange={() => handleOptionChange(index, 'No')}
              />
              <span className="custom-radio"></span>
              <span className="option-text">No</span>
            </label>
          </div>
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
