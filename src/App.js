import React from 'react';
import './App.scss';
import TaskGroup from './components/TaskGroup';
import TaskGroups from './data/TaskGroups';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My matrix heading
      </header>
      <main className="App-container">      
        <TaskGroup className="q1" taskGroup={TaskGroups.q1} />
        <TaskGroup className="q2" taskGroup={TaskGroups.q2} />
        <TaskGroup className="q3" taskGroup={TaskGroups.q3} />
        <TaskGroup className="q4" taskGroup={TaskGroups.q4} />            
      </main>
    </div>
  );
}

export default App;
