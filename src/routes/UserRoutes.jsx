import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { LessonsDetailsPage, LessonsPage, ProfilePage } from '../pages/user'
import { QuestionProvider } from '../contexts/QuestionProvider'


export const UserRoutes = () => {
  return (
    <QuestionProvider>
      <Routes>
        <Route path='/lessons' element={<LessonsPage />} />
        <Route path='/lesson/:id' element={<LessonsDetailsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/*' element={<Navigate to='/lessons' />} />
      </Routes>
     </QuestionProvider>

  )
}
