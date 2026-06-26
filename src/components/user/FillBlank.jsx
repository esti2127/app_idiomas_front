import React from 'react'

export const FillBlank = ({question}) => {
  return (

    <>
    <div>{question?.question_text}</div>

    <input type="text" placeholder="Write your answer here"/>

    </>
  )
}
