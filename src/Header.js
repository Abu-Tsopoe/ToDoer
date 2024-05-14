// Header.js

import React from 'react';
import logo from './images/ToDoer.png';
import { NavLink } from 'react-router-dom';
import { useTheme } from './AppTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container-fluid header px-5 text-bg-light">
    <nav className="navbar navbar-expand-lg  ">
    <NavLink to="/ToDoer" className="navbar-brand">
        <img src={logo} alt="logo"/>
    </NavLink>
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu"><span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse justify-content-end" id="menu">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/ToDoer" className="nav-link">HOME</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/tasks" className="nav-link" >MY TASKS</NavLink>
            </li>   
            <li className="nav-item">
                <NavLink to="/about" className="nav-link" >ABOUT US</NavLink>
            </li>        
        </ul>
        <button onClick={toggleTheme} className="btn theme-toggle">
        {theme === 'light' ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-sun-fill"></i>}
          </button>  
    </div> 
   
</nav>

</div>
  );
};

export default Header;
