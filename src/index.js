import React from 'react';
import ReactDOM from 'react-dom';

// Create a new Component. This component should produce some html
const App = function() {
  return <div>Hello there!</div>;
}

// Take this component's generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));



