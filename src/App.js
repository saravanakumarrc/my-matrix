import React from 'react';
import './App.scss';
import TaskMatrix from './components/TaskMatrix';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My matrix heading
      </header>
      <main className="App-container">
        <TaskMatrix/>
      </main>
    </div>
  );
}

export default App;
