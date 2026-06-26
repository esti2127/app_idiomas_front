import React, { useContext, useState } from 'react'

import { QuestionContext } from '../../contexts/QuestionContext'


export const MultipleChoice = ({ currentQuestion, colorStatus, answered }) => {

  const {handleChosenAnswer} = useContext(QuestionContext)




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
                  name="answer"
                  value={answer.answer_text}
                  id="chosenAnswered"
                  onChange={(ev) => handleChosenAnswer(ev, answer, currentQuestion.id_question)} 
                  />
                {answer.answer_text}
          
              </label>


            </li>

          </>

        ))


        }

      </ul>

    </div>

  )
}
