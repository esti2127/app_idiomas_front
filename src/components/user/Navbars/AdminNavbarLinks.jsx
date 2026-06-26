import React, { useContext } from 'react'

import { Link } from 'react-router'
import { UserContext } from '../../../contexts/UserContext'

export const AdminNavbarLinks = () => {

   const { logout } = useContext(UserContext)

  return (
    <>
    <li>
      <Link to="/admin">
        Admin Dashboard
      </Link>
    </li>
    <li>
      <Link to="/admin/lessons">
        Admin Lessons
      </Link>
    </li>
    <li>
      <button onClick={logout}>
        Logout
      </button>
    </li>
    </>
  )
}
