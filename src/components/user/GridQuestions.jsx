import React, { useContext, useEffect, useState } from 'react'
import { useFetchLessonData } from '../../hooks/useFetchLessonData'
import { MultipleChoice } from './MultipleChoice'
import { QuestionContext } from '../../contexts/QuestionContext'
import { FillBlank } from './FillBlank'
// import { UserContext } from '../../contexts/UserContext'
// import { QuestionProvider } from '../../contexts/QuestionProvider'
// import { QuestionContext } from '../../contexts/QuestionContext'

export const GridQuestions = ({ id, type/* , handleQuestion */ }) => {

  const url = import.meta.env.VITE_URL_BASE_BACK

  const { data, error, isLoading, getData } = useFetchLessonData()

  const { userSelection, handleCorrect, handleTotalScore, questionType, currentLessonNumber, setCurrentLessonNumber, handleQuestionType, handleNextQuestion, score } = useContext(QuestionContext)

  // const [colorStatus, setColorStatus] = useState("")

  // const [answered, setAnswered] = useState(false)


  const llamadaApi = async () => {

    // te faltaba el type del back

    await getData(`${url}/lessons/questions/with_answers/${id}?type=multiple%20choice`, {
      headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}` }
    })
  }

  const allQuestions = data?.questionsWithAnswers || [];
  // console.log(allQuestions)
  //el array empieza en la posición 0 y el estado inicial de currentLessonNumber es 1 
  const currentQuestion = allQuestions[currentLessonNumber - 1];

  // Esto lo usamos luego en la función handleNextQuestion que tenemos en el provider
  // const totalQuestions = data?.questionsWithAnswers?.length || 0
  const totalQuestions = allQuestions.length;

  //Yo quiero mostrar el score total cuando el usuario haya finalizado la lección. 
  // Poner el score por cada pregunta es absurdo. Sacaría o 0 o 1 en todas


  useEffect(() => {

    llamadaApi()

    // para que la API vuelva a ejecutarse cada vez que cambie el tipo de pregunta
  }, [questionType])
  // el useEffect está atento a lo que pase con el index. Como arriba se setea, aqui lama a la funcion handle que gestiona el cambio de type 


  // useEffect(() => {

  //   if (currentQuestion) {
  //     handleQuestionType(currentQuestion.type)
  //   }

  // }, [currentQuestion])

  return (

    <>

      {/* <p>{JSON.stringify(userSelection)}</p> */}
      {/* <p>{JSON.stringify(data.questionsByType)}</p> */}


      {isLoading ? <p>Loading...</p>

        :

        <article >

          {currentQuestion ? (
            <article key={currentQuestion.id_question}>
              <h3>{currentQuestion.type}</h3>

              {currentQuestion.type === 'multiple choice' ? (
                <MultipleChoice
                  // answered={answered}
                  // colorStatus={colorStatus}
                  currentQuestion={currentQuestion}
                />
              ) : (
                <FillBlank currentQuestion={currentQuestion} />
              )}
            </article>
          ) : (
            <p>{error?.message}</p>
          )}

          <button onClick={handleCorrect}>TEST ANSWERS</button>

          {/* Este boton solo quiero que se muestre cuando el usuario este en la última pregunta. 
          Es decir: el index será 9 porque en programación empezamos a contar desde el 0. Así que a la length del total de preguntas con respuestas le tendremos que restar uno para que sean iguales  */
          }

          {(currentLessonNumber >= totalQuestions) ? (
            <>
              <button onClick={handleTotalScore}>SHOW FINAL SCORE</button>
              <p>Score: {score}</p>
            </>
          ) : (

            <button onClick={() => handleNextQuestion(totalQuestions)}>Next question</button>

          )}

        </article>

      }

      {/* // Hacer la llamada a la API para traer las preguntas de la leccion con ese id de la bbdd
    //condicional con map según su question.type y que pinte las preguntas
    //pasar lo anterior a un botón para que vayan saliendo pregunta a pregunta (como en Duolingo)
    
    // <Question/> */}

    </>
  )
}
