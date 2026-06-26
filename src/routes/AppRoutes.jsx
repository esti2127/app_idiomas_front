// import React, { useContext, useState } from 'react'
// import { Navigate, Route, Routes } from 'react-router'
// import { HomePage } from '../pages/HomePage'
// import { LoginPage, RegisterPage } from '../pages/auth'
// import { LessonsDetailsPage, LessonsPage, ProfilePage } from '../pages/user'
// import { HomeAdminPage } from '../pages/admin'
// import { Question } from '../components/QuestionDelete'
import { UserRoutes } from './UserRoutes'
import { PublicRoutes } from './PublicRoutes'
import { AdminRoutes } from './AdminRoutes'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'


export const AppRoutes = () => {

  const {user, role} = useContext(UserContext)

  console.log(user)
  console.log(role)

  // const [role, setRole] = useState('user')

  return (

    <>
      {!user && <PublicRoutes />}
      {user && role === 'admin' && <AdminRoutes />}
      {user && role === 'user' && <UserRoutes />}

    </>
  )
}
