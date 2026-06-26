import React, { useContext } from 'react'

import { Link } from 'react-router'
import { UserContext } from '../contexts/UserContext'
import { AdminNavbarLinks } from './user/Navbars/AdminNavbarLinks'
import { PublicNavbarLinks } from './user/Navbars/PublicNavbarLinks'
import { UserNavbarLinks } from './user/Navbars/UserNavbarLinks'

export const Navbar = () => {

  const { user, role, logout } = useContext(UserContext)

// useNavigate() requiere que el componente esté envuelto por <BrowserRouter>  
const handleLogOutClick = () => {
    logout();
    navigate('/');
  }

  return (

    <nav>
      <ul className="nav_bar">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        {!user ? (

          <PublicNavbarLinks/>
        )
          :
          (
            <>

              {/* to= cambiar rutas y poner las que son */}
              {role === 'admin' && <AdminNavbarLinks onLogout={handleLogOutClick}/>}
              {role === 'user' && <UserNavbarLinks onLogout={handleLogOutClick}/>}
              {/* <li>
                <Button onClick={handleLogOutClick}>
                  Logout
                </Button>
              </li> */}
            </>
          )}
      </ul>
    </nav>

  )
}
