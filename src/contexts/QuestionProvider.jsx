import React, { useState } from 'react'
import { QuestionContext } from './QuestionContext'

export const QuestionProvider = ({ children }) => {

  const [userSelection, setuserSelection] = useState({})

  const [score, setScore] = useState(0)

  const [correctAnswer, setCorrectAnswer] = useState({})

  const [questionType, setQuestionType] = useState('multiple choice')

  const [currentLessonNumber, setCurrentLessonNumber] = useState(1)







  const handleNextQuestion = (totalQuestions) => {

    if (currentLessonNumber < totalQuestions) {
      // Si aún quedan preguntas en el bloque actual, avanzamos a la siguiente
      setCurrentLessonNumber(prev => prev + 1)
      return;
    } else {

      switch (questionType) {
        case 'multiple choice':
          setQuestionType('Fill in the blank');
          setCurrentLessonNumber(prev => prev + 1);
          break;

        case 'Fill in the blank':
          // De momento piensa si la función del score iría aquí seguro
          // handleTotalScore()
          break;

        default:
          break;
      }
    }
  }



  const handleQuestionType = (string) => {

    switch (string) {
      case "Fill in the blank":
        setQuestionType("Fill in the blank")
        break;
    }

  }


  const handleChosenAnswer = (ev, answer, id_question) => {

    // console.log(ev.target.checked)

    // console.log(answer)
    // console.log(id_question)

    setuserSelection(answer)

  }

  // lo de los colores está mal. En el css los cambios se aplican sobre input type="radio"

  const handleCorrect = () => {



    if (userSelection && Object.keys(userSelection).length > 0) {

      setAnswered(true)

      // seteamos correctAnswer para que el score total de preguntas acertadas se muestre al finalizar la lección

      setCorrectAnswer(prev => ({
        ...prev,
        [currentQuestion.id_question]: true
      }))

      // si lo que ha marcado el usuario en la bbdd es correcto (true)

      if (userSelection?.is_correct === true) {

        // el prev (que es un argumento) es el estado anterior y aqui le sumamos uno. En este caso es 0 al inicio, y le irá sumando un tanto por cada respuesta acertada

        //pero en el css se aplica al span, asi que igual le tienes que quitar lo de span en el css

        setColorStatus("correct-answer-text")

        // quiero guardar un tanto para el score que corresponde a esa respuesta correcta
        //pero necesito guardar todas las respuestas correctas en alguna parte 

      } else {

        setColorStatus("incorrect-answer-text")

      }
    } else {

      setColorStatus("")

    }
  }



  const handleTotalScore = () => {

    // setScore(prev => prev+1)

    const totalCorrectAnswers = Object.keys(correctAnswer).length

    setScore(totalCorrectAnswers)

  }





  return (
    <QuestionContext.Provider value={
      {
        score,
        setScore,
        userSelection,
        setuserSelection,
        handleChosenAnswer,
        handleCorrect,
        handleTotalScore,
        questionType,
        currentLessonNumber,
        setCurrentLessonNumber,
        handleQuestionType,
        handleNextQuestion
      }
    }>

      {children}

    </QuestionContext.Provider>
  )
}
