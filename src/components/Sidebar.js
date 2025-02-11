import React, { useState } from 'react';
import '../styles/Sidebar.css'; // Ensure this import is present

const appOptions = [
  {
    type: 'Regular Web App',
    dropdown: [
      { icon: 'fa-html5', name: 'HTML5' },
      { icon: 'fa-python', name: 'Django' },
    ],
  },
  {
    type: 'Single Page App',
    dropdown: [
      { icon: 'fa-js-square', name: 'JavaScript' },
      { icon: 'fa-vuejs', name: 'Vue.js' },
      { icon: 'fa-angular', name: 'Angular' },
      { icon: 'fa-react', name: 'React' },
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

const Sidebar = () => {
  const [selectedProduct, setSelectedProduct] = useState('DX');
  const [selectedAppType, setSelectedAppType] = useState('Single Page App');
  const [selectedDropdownItem, setSelectedDropdownItem] = useState('');

  const handleRadioChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleRadioChangeAppType = (type) => {
    setSelectedAppType(type);
    setSelectedDropdownItem('React'); // Reset dropdown selection when app type changes
  };

  const handleRadioChangeDropdownItem = (item) => {
    setSelectedDropdownItem(item);
  };

  return (
    
    <aside className="sidebar">
      <h2>FILTER BY</h2>
      <section>
        <h3>Choose a product</h3>
        <ul className="filter-list">
          {['DX', 'CDT', 'Market Place'].map((product) => (
            <li key={product} className="light-box">
              <label>
                <input
                  type="radio"
                  name="product"
                  value={product}
                  checked={selectedProduct === product}
                  onChange={handleRadioChange}
                />{' '}
                {product}
              </label>
            </li>
          ))}
        </ul>
      </section>

      <hr className='divider'/>
      
      <section>
        <h3>Select Application Type</h3>
        <div className="radio-buttons">
          {appOptions.map((option) => (
            <div key={option.type} className="light-box">
              <label>
                <input
                  type="radio"
                  name="appType"
                  value={option.type}
                  checked={selectedAppType === option.type}
                  onChange={() => handleRadioChangeAppType(option.type)}
                />{' '}
                {option.type}
              </label>
            </div>
          ))}
        </div>

        {selectedAppType && (
          <div className="dropdown">
            <h4 className="highlight">{selectedAppType}</h4>
            <div>
              {appOptions
                .find((option) => option.type === selectedAppType)
                .dropdown.map((item, index) => (
                  <div key={index} className="light-box dropdown-item">
                    <label>
                      <input
                        type="radio"
                        name="dropdownItem"
                        value={item.name}
                        checked={selectedDropdownItem === item.name}
                        onChange={() => handleRadioChangeDropdownItem(item.name)}
                      />
                      <i className={`fab ${item.icon}`}></i> {item.name}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        )}
      </section>
    </aside>
    
  );
};



export default Sidebar;