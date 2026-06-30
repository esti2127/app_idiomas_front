import React from 'react'

export const FillBlank = ({currentQuestion}) => {
  return (

    <>
    <p>{currentQuestion.question_text}</p>

    <input type="text" placeholder="Write your answer here"/>

    </>
  )
}
