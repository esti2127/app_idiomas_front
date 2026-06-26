import React, { useContext } from 'react'

import { Link } from 'react-router'
import { UserContext } from '../../../contexts/UserContext'

export const UserNavbarLinks = () => {

  const { logout } = useContext(UserContext)

  return (
    <>
      <li>
        <Link
          to="/lessons">
          Lecciones
        </Link>
      </li>

      <li>
        <Link
          to="/profile">
          Perfil
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
