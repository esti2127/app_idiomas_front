import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext' 
import { Navigate } from 'react-router'

export const PrivateRoutes = ({children, allowedRoles}) => {

   const { user, role } = useContext(UserContext)

 // Poner usuario ficticio

  if(!user){
    return <Navigate to ="/login"/>
  }

  if(!allowedRoles.includes(role)){
    return <Navigate to ="/"/>
  }

  return children
  
}
