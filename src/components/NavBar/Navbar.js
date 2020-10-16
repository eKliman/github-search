import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false)
  
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-md">
      <NavLink to="/" exact className="navbar-brand">
        Github Search
      </NavLink>
      <button 
        className={`navbar-toggler${navToggle ? ' navTogglerOpen' : ''}`} 
        type="button" 
        aria-label="Toggle navigation"
        onClick={() => setNavToggle(!navToggle)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse${navToggle ? ' show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">Главная</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}