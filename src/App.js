import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name.js';

function App() {
  let variable1 = 'Hello!!!!!!!!';
  return (
    <div className="App">
      {variable1}
      <Name name="Miron" title="www.google.com.au"/>
    </div>
  );
}

export default App;
