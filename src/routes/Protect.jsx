import React from 'react'
import { QuestionProvider } from '../contexts/QuestionProvider'

export const Protect = ({children}) => {



  return (
    <QuestionProvider>
      {children}
    </QuestionProvider>
  )
}
