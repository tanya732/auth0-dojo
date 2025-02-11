import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Carousel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Define state variables
  const navigate = useNavigate();

  const boxes = [
    {
      id: 1,
      heading: 'Quickstarts',
      content: 'In this lab you will learn about how Auth0 allows you to add authentication following quickstarts',
      buttonEnabled: true,
    },
    { id: 2, 
      heading: "Auth API's",
      content: 'In this lab you will learn and explore Auth0 Authentication API"s i.e., authorize, Signup, Reset Password',
      link: 'https://auth0.com/docs/api/authentication',
      buttonEnabled: false,
    },
    { id: 3, 
      heading: "Managment API's",
      content: 'In this lab you will learn and explore about Auth0 Management API"s',
      link: 'https://auth0.com/docs/api/management/v2',
      buttonEnabled: true,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
  };
  
  const handleRedirect = () => {
    navigate('/code-sandbox');
  };

  const progress = ((currentIndex + 1) / boxes.length) * 100;

  return (
    <div className="carousel">
      <button className="arrow-button left" onClick={handlePrev}>&#9664;
      <i className="fas fa-chevron-left"></i>
      </button>
      <div className="carousel-box">
        <div className="box-content">
        <h2>{boxes[currentIndex].heading}</h2>
        <p>{boxes[currentIndex].content}</p>
        {boxes[currentIndex].link && (
            <a href={boxes[currentIndex].link} target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          )}
        </div>
        <button className="bottom-right-button try-button"  disabled={!boxes[currentIndex].buttonEnabled}
        onClick={handleRedirect}>Try</button>
      </div>
      <button className="arrow-button right" onClick={handleNext}>&#9654;
      <i className="fas fa-chevron-right"></i>
      </button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Carousel;