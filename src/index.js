import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyAXC1NcqBhB7lPloqkaQrW7XinPU15jBz8';


// Create a new Component. This component should produce some html
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));



