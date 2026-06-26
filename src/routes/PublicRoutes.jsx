import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { LoginPage, RegisterPage } from '../pages/auth'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<RegisterPage />} />
    </Routes>
  )
}
