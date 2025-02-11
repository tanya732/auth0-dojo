import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './components/Sidebar'; // Adjust path if necessary
import Navbar from './components/Navbar'; // Adjust path if necessary
import Carousel from './components/Carousel'; // Import Carousel component
import CodeSandboxPage from './components/CodeSandboxPage'; // Import the new page component
import './App.css'; // Ensure this import is present
import './styles/Sidebar.css'; // Import Sidebar CSS
import './styles/Carousel.css'; // Import Carousel CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/code-sandbox';

  return (
    <div className="main-content">
      {showSidebar && <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/code-sandbox" element={<CodeSandboxPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;