// AddTask.js
import React, { useState } from 'react';
import axios from 'axios';
import TaskList from './TaskList';

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault()
    if (taskName !== "") { 
    axios.post("http://localhost:4000/tasks", { taskName, time })
      .then(() => {
        alert("Task Added Successfully")
        setTaskName("")
        setTime("")
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div>
      <div className='add-task py-5'>
        <div className='headline mb-5 text-center'>
          <h3 >"Get Things Done: A To-do List for Every Occasion"</h3>
        </div>
        <div className='px-3 task d-flex justify-content-center'>
          <form className='col-12 col-lg-8 py-4 px-3' onSubmit={handleAddTask}>
            <h5 className='mb-3'>ADD TASK</h5>
            <div className='row'>
              <div className='col-7'>
                <input type='text' className='form-control mb-3 border-dark' id='task' placeholder='Enter your task...' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
              </div>
              <div className='col-5 mb-3'>
                <input type='time' className='form-control mb-3 border-dark' value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>
            <input type='submit' className='btn btn-primary text-white' value='Add Task' />
          </form>
        </div>
      </div>
      <TaskList/>
    </div>
  );
};

export default AddTask;
