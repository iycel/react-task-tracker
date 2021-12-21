import './App.css';
import React, { useState } from 'react';
import { initialState } from './store/initialStates';
import Header from './components/Header';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

const App = () => {

  const [tasks, setTasks] = useState(initialState);
  const [isTaskBarShowed, setIsTaskBarShowed] = useState(false);

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
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
  }

  // Toggle show and hide
  const toggleShow = () => {
    setIsTaskBarShowed(prevState => !prevState)
  };

  return (
    <div className='container'>
      <Header title={'Task Tracker'} toggleShow={toggleShow} isTaskBarShowed={isTaskBarShowed} />
      {isTaskBarShowed && <CreateTask onCreate={onCreate} />}
      {tasks.length > 0 ?
        (<TaskList tasks={tasks} onDelete={onDelete} toggleDone={toggleDone} />)
        :
        (<p style={{ textAlign: 'center' }}>No Task to Show</p>)
      }

    </div>
  )
}

export default App;
