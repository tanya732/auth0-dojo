import React from 'react';
import '../styles/GuideSteps.css'; // Add styles for better presentation

const GuideSteps = () => {
  return (
    <div className="guide-steps">
      <h2>Guide Steps</h2>
      <ol>
        <li>
          Click <strong>Open Editor</strong> in the top right corner. Sign in to run the app.
        </li>
        <li>Open a <strong>New Terminal</strong>.</li>
        <li>
          Run the command:
          <div className="code-box">
            <code>cd Sample-01</code>
          </div>
        </li>
        <li>
          Install the required packages:
          <div className="code-box">
            <code>npm install @auth0/auth0-react</code>
          </div>
          <div className="code-box">
            <code>npm install react-router-dom</code>
          </div>
        </li>

        <li>Sign up for a free Auth0 account or log in to Auth0.</li>

        <li>
          Set up your application in the <strong><a href="https://manage.auth0.com/dashboard/us/dev-tanya/applications" target="_blank" rel="noopener noreferrer">Auth0 Dashboard</a></strong>:
        </li>

        <li>
          Create a new Single Page Application in Auth0 Dashboard.
        </li>

        <li>
          Add the domain, clientId and Audience copied from the Auth0 Dashboard to the <strong>auth_config.json</strong> file present at path Sample-01/src.
        </li>

      
        <li>
          Start the development server:
          <div className="code-box">
            <code>npm run dev</code>
          </div>
          Click on <strong>Preview</strong> and copy the generated URL.
        </li>
        <li>
          <ul className="nested-list">
            <li>Add the copied URL to <strong>Callback URLs</strong>.</li>
            <li>Configure <strong>Logout URLs</strong>.</li>
            <li>Configure <strong>Allowed Web Origins</strong>.</li>
            <li>Save the configuration.</li>
          </ul>
        </li>
        <li>
          Refresh again or stop and re-run the application:
          <div className="code-box">
            <code>npm run dev</code>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default GuideSteps;
