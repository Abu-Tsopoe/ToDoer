import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState("")
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') {
      return task.completed;
    } else if (filter === 'Incomplete') {
      return !task.completed;
    } else {
    return true;
    }
  });
  useEffect(() => {
    axios.get("http://localhost:4000/tasks")
    .then((res) => setTasks(res.data))
    .catch((err) => console.log(err))
  }
  )

  const handleCheckbox = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed }; 
        axios.put(`http://localhost:4000/tasks/${taskId}`, updatedTask)
          .then(() => {
            if (updatedTask.completed) {
              alert("Task Completed");
            }
          })
          .catch((err) => console.log(err));
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  
  


  const editTask = (taskId) =>{
    axios.get(`http://localhost:4000/tasks/${taskId}`)
    .then((res)=>{
        setId(res.data.id)
        setTaskName(res.data.taskName)
        setTime(res.data.time)
    })
  }
  
  
  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:4000/tasks/${taskId}`)
    .then(() => {
      
      alert("Task Deleted Successfully");
    })
        .catch((err) => console.log(err))
}

const clearCompletedTasks = () => {
  const completedTasks = tasks.filter(task => task.completed);
  if (completedTasks.length > 0){
  completedTasks.forEach(task => {
    axios.delete(`http://localhost:4000/tasks/${task.id}`)
      .then(() => console.log(`Task deleted successfully`))
      .catch((err) => console.log(err));
  });
  setTasks(tasks.filter(task => !task.completed));
  alert("Cleared Completed Tasks Successfully");
}
};

const updateTask = (e) =>{
  e.preventDefault()
  axios.put("http://localhost:4000/tasks/" + id, {id, taskName, time})
  .then(()=>alert ("Task Updated Successfully"))
  .catch((err)=>console.log(err))
}

  return (
    <div className='task-list py-5'>
    <div className='headline text-center mb-4'>
    <h3 >...My To-Do List...</h3>
    </div>
    <div className='container d-flex justify-content-end'>
    <label className='me-2'>Filter: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
    </div>
    <div className='list py-5 px-3 d-flex justify-content-center'>
     <ul className='col-12 col-lg-8 list-group'>
        {filteredTasks.map(task => (
       <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
           <div className='row'>
           <div className="col-5">
              <input type='checkbox' className='me-1' checked={task.completed} onChange={() => handleCheckbox(task.id)}/>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.taskName}</span>
                </div>
              <div className="col-3"> {task.time}</div>
              <div className='col-4'>
              <button className='btn btn-sm btn-primary me-1' onClick={()=>editTask(task.id)} data-bs-target="#editTask" data-bs-toggle="modal"><i className="bi bi-pen-fill"></i></button>
              <button className='btn btn-sm btn-danger ' onClick={()=>deleteTask(task.id)}><i className="bi bi-trash-fill"></i></button></div>           
           </div>
          </li>   
        ))} 
     </ul>
    </div>
   <div className='d-flex justify-content-center'>
    <button className="btn btn-danger " onClick={clearCompletedTasks}>Clear Completed</button>
    </div>
    <div className='modal fade' id='editTask'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h4 className='modal-title text-center'>Update Task</h4>
                    <button className='btn-close' data-bs-dismiss="modal"></button>
                  </div>
                  <div className='modal-body'>
                   <form onSubmit={updateTask}>
                    <input type='text' name="taskName" placeholder='Enter Your Task...' className='form-control mb-3' value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                    <input type='time' name="time" className='form-control mb-3' value={time} onChange={(e) => setTime(e.target.value)}/>
                    <input type='submit' value="Update Task" className='btn btn-primary' data-bs-dismiss="modal"/>
                   </form>
                  </div>
                </div>
              </div>
            </div>
 </div>
  )
}

export default TaskList