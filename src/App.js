import React from 'react';
import './App.scss';
import TaskGroup from './components/TaskGroup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My matrix heading
      </header>
      <main className="App-container">      
        <TaskGroup className="q1" />
        <TaskGroup className="q2" />
        <TaskGroup className="q3" />
        <TaskGroup className="q4" />            
      </main>
    </div>
  );
}

export default App;
