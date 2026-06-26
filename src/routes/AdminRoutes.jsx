import React from 'react'

import { Navigate, Route, Routes } from 'react-router'
import { HomeAdminPage } from '../pages/admin'
import { LoginPage, RegisterPage } from '../pages/auth'
import { PrivateRoutes } from './PrivateRoutes'

export const AdminRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<PrivateRoutes allowedRoles={["admin"]} />}> */}

      <Route path='/admin' element={
        <PrivateRoutes allowedRoles={["admin"]}>
          <HomeAdminPage />
        </PrivateRoutes>} />
        <Route path='/admin/lessons' element={<LoginPage />} />
      <Route path='/signup' element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to='/admin' />} />
      {/* </Route> */}
    </Routes>
  )
}
