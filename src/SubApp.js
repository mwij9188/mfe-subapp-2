import React from 'react';

// Accept props
const SubApp = ({ message, onMessage }) => (
  <div>
    SubApp2 Loaded! Message: {message}
    <br />
    <button onClick={() => onMessage && onMessage('Greetings from SubApp2!')}>
      Send Message to Main App
    </button>
  </div>
);

export default SubApp;