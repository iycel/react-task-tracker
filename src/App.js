import './App.css';
import React, { useState } from 'react';
import { initialState } from './store/initialStates';
import Header from './components/Header';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

const App = () => {

  const [tasks, setTasks] = useState(initialState);

  // Create a task
  const onCreate = (task) => {
    const id = Date.now();
    const newTask = { id, ...task }
    setTasks((prevState) => [newTask, ...prevState])
  }
  // Delete task
  const onDelete = (id) => {
    return (
      setTasks(tasks.filter((task) => task.id !== id))
    )
  }

  // Toggle done

  // Toggle show and hide

  return (
    <div className='container'>
      <Header title={'Task Tracker'} />
      <CreateTask onCreate={onCreate} />
      <TaskList tasks={tasks} onDelete={onDelete} />
    </div>
  )
}

export default App;
