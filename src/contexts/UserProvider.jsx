import React, { useState } from 'react'
import { UserContext } from './UserContext'

// Este UserProvider solo va a ser para la validacion

export const UserProvider = ({children}) => {

  const [user, setUser] = useState('user')

  const [role, setRole] = useState('user')


  const logout = () => { 
    setUser(null);
    setRole(null);
  }

  
  return (
   
  <UserContext.Provider value={{user, setUser, role, setRole, logout}}>
    {children}
   </UserContext.Provider>

  )
}
