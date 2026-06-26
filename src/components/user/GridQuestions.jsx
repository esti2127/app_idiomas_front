import React, { useContext, useEffect, useState } from 'react'
import { useFetchLessonData } from '../../hooks/useFetchLessonData'
import { MultipleChoice } from './MultipleChoice'
import { QuestionContext } from '../../contexts/QuestionContext'
// import { FillBlank } from './FillBlank'
// import { UserContext } from '../../contexts/UserContext'
// import { QuestionProvider } from '../../contexts/QuestionProvider'
// import { QuestionContext } from '../../contexts/QuestionContext'

export const GridQuestions = ({ id/* , handleQuestion */ }) => {

  const url = import.meta.env.VITE_URL_BASE_BACK

  const { data, error, isLoading, getData } = useFetchLessonData()

  const{userSelection, handleCorrect, handleTotalScore, questionType, index, setIndex, handleQuestionType} = useContext(QuestionContext)

  const [colorStatus, setColorStatus] = useState("")

  const [answered, setAnswered] = useState(false)


  const llamadaApi = async () => {

    await getData(`${url}/lessons/questions/${id}/with_answers`, {
      headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}` }
    })
  }

  // Esto está mal
  const currentQuestion = data?.questionsWithAnswers?.[index]

   const handleQuestion = ()=> {

    setIndex(index + 1)

  }

  //Yo quiero mostrar el score total cuando el usuario haya finalizado la lección. 
  // Poner el score por cada pregunta es absurdo. Sacaría o 0 o 1 en todas
  

  useEffect(() => {

    llamadaApi()

  }, [])

  return (

    <>

      {/* <p>{JSON.stringify(userSelection)}</p> */}

      {isLoading ? <p>Loading...</p>

        :



        <article >

          {
            (!currentQuestion) ? <p>{error.message}</p>

            :

            (
                currentQuestion.type.includes(questionType) &&

            (

              <>

                <h3>Multiple choice questions</h3>
                <MultipleChoice answered={answered} colorStatus={colorStatus} currentQuestion={currentQuestion} />

              </>
              
            )
            
            )
          }

        

          <button onClick={handleCorrect}>TEST ANSWERS</button>

          {/* Este boton solo quiero que se muestre cuando el usuario este en la última pregunta. 
          Es decir: el index será 9 porque en programación empezamos a contar desde el 0. Así que a la length del total de preguntas con respuestas le tendremos que restar uno para que sean iguales  */}

          {(data.questionsWithAnswers.length - 1 === index) ? (
            <>
              <button onClick={handleTotalScore}>SHOW FINAL SCORE</button>
              <p>Score: {score}</p>
            </>
          ) : (

            <button onClick={handleQuestion}>Next question</button>

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
