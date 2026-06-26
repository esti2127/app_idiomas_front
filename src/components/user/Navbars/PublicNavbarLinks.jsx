import React from 'react'

import { Link } from 'react-router'

export const PublicNavbarLinks = () => {
  return (
    <>
      <li>
        <Link to="/login">
          Login
        </Link>
      </li>

      <li>
        <Link to="/signup">
          Signup
        </Link>
      </li>
    </>
  )
}

