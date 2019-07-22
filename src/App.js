import React from 'react';
import './App.css';

import CounterWithClass from './CounterWithClass'
import CounterWithHooks from './CounterWithHooks'

function App() {
  return (
    <div className="App">
        <CounterWithClass/>
        <CounterWithHooks/>
    </div>
  );
}

export default App;
