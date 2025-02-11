import React, { useState } from 'react';
import '../styles/AppOptions.css'; // Optional CSS for styling

// Mock data for categories and dropdown items
const appOptions = [
  {
    type: 'Regular Web App',
    dropdown: [
      { icon: 'fa-html5', name: 'HTML5' },
      { icon: 'fa-react', name: 'React' },
      { icon: 'fa-python', name: 'Django' },
    ],
  },
  {
    type: 'Single Page App',
    dropdown: [
      { icon: 'fa-js-square', name: 'JavaScript' },
      { icon: 'fa-vuejs', name: 'Vue.js' },
      { icon: 'fa-angular', name: 'Angular' },
    ],
  },
  {
    type: 'Native/Mobile App',
    dropdown: [
      { icon: 'fa-android', name: 'Android' },
      { icon: 'fa-apple', name: 'iOS' },
      { icon: 'fa-react', name: 'React Native' },
    ],
  },
  {
    type: 'Backend/API',
    dropdown: [
      { icon: 'fa-node', name: 'Node.js' },
      { icon: 'fa-java', name: 'Java' },
      { icon: 'fa-python', name: 'Python' },
    ],
  },
];

const AppOptions = () => {
  const [selectedType, setSelectedType] = useState('Single Page App');

  const handleRadioChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="app-options">
      <h3>Select Application Type</h3>
      {/* Radio Buttons */}
      <div className="radio-buttons">
        {appOptions.map((option) => (
          <div key={option.type} className="light-box">
          <label>
            <input
              type="radio"
              name="appType"
              value={option.type}
              checked={selectedType === option.type}
              onChange={() => handleRadioChange(option.type)}
            />{' '}
            {option.type}
          </label>
        </div>
        ))}
      </div>

      {/* Dropdown for Selected Type */}
      {selectedType && (
        <div className="dropdown">
          <h3>{selectedType} Options</h3>
          <ul>
            {appOptions
              .find((option) => option.type === selectedType)
              .dropdown.map((item, index) => (
                <li key={index}>
                  <i className={`fab ${item.icon}`}></i> {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AppOptions;
