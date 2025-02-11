// CodeSandboxPage.js
import React from 'react';
import '../styles/CodeSandboxPage.css'; // Ensure this import is present
import GuideSteps from './GuideSteps'; // Import the GuideSteps component


const CodeSandboxPage = () => {
  return (
    <div className="code-sandbox-page">
    
      <iframe src="https://codesandbox.io/p/github/tanya732/auth0-react-codelab/master?import=true&embed=1&file=%2FSample-01%2FREADME.md&showConsole=true"
          //  style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
          className="code-sandbox-iframe"
          title="tanya732/auth0-react-codelab/master"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
         <GuideSteps /> {/* Add the guide steps component */}
    </div>
  );
};

export default CodeSandboxPage;