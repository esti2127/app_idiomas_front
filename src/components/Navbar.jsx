import React from 'react'

import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <ul className="nav_bar">
        <NavLink to="/"  className={({ isActive }) => isActive ? 'cambioColor' : ''}>
       Lessons
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'cambioColor' : ''}>
        Admin Dashboard
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'cambioColor' : ''}>
        Profile
        </NavLink>
      </ul>
    </nav>
  )
}
