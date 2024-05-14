import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import AddTask from './AddTask'
import TaskList from './TaskList'
import About from './About'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path ="/ToDoer" element = {<AddTask/>}/>
            <Route path ="/tasks" element = {<TaskList/>}/>
            <Route path ="/about" element = {<About/>}/>
            <Route path ="*" element = {<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

export default Routing