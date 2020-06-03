import React, { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  let [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
    <Header title={`contador: ${counter}`} />

    <h1>{counter}</h1>
    <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}  

export default App;
