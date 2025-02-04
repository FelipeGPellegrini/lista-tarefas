import React, { useState } from 'react';
import CreateTask from './components/CreateTask';
import Task from './components/Task';
import Header from './components/Header'
import "./index.css"

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    setTasks([...tasks, { title, description }]);
  };

  return (
    <div>
      <Header/>
      <div>
        {tasks.map((task, index) => (
          <Task key={index} title={task.title} description={task.description} />
        ))}
      </div>
      <CreateTask addTask={addTask} /> 
    </div>
  );
};

export default App;

