import React, { useContext, useState } from 'react'

import { QuestionContext } from '../../contexts/QuestionContext'


export const MultipleChoice = ({ currentQuestion, colorStatus, answered }) => {

  const {userSelection, handleChosenAnswer, isEvaluated} = useContext(QuestionContext)

  return (

    <div>

      {/* <p>{JSON.stringify(currentQuestion)}</p> */}

      <p>{currentQuestion.question_text}</p>
      <ul >
        {currentQuestion.answers?.map((answer) => (
          <>
            {/* <p>{JSON.stringify(answer)}</p>
            <p>{JSON.stringify(currentQuestion.id_question)}</p> */}

            <li key={answer.id_answer}>

              <label 
                className={(answered ? (answer.is_correct ? "correct-answer-text" : "incorrect-answer-text") : "")}>

                <input
                 className={(answered ? (answer.is_correct ? "correct-answer-text" : "incorrect-answer-text") : "")}
                  type="radio"
                  name={'q_' + currentQuestion.id_question}
                  checked={userSelection?.answer_text === answer.answer_text}
                  disabled={isEvaluated}
                  value={answer.answer_text}
                  id={'ans_' + answer.id_answer}
                  onChange={(ev) => handleChosenAnswer(ev, answer, currentQuestion.id_question)} 
                  />
                {answer.answer_text}
          
              </label>
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}
