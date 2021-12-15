import './App.css';
import React, { useState } from 'react';
import { initialState } from './store/initialStates';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  const [tasks, setTasks] = useState(initialState);

  return (
    <div className='container'>
      <Header title={'Task Tracker'} />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
