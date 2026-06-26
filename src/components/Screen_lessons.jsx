// import React from 'react'
// // import { Lesson } from './Lesson'

import { useEffect } from "react";
import { useFetchDataDB } from "../hooks/useFetchLessonData";


import { useQuestionCard } from '../hooks/useStateQuestionCorrect'
import { useParams } from "react-router";

export const Screen_lessons = () => {

  const { data: lessonsData, isLoading, error, getData } = useFetchDataDB();

  const {userSelection, isEvaluated, score, handleSaveAnswer, handleTestLesson} = useQuestionCard();

  useEffect(() => {

    const {id} = useParams()
  getData('http://localhost:3000/api/lessons/with_data/${id}');
  }, []);

  if (isLoading) return <p>Loading lessons...</p>;


  return (
    <>
      <header>
        <h1>Lessons</h1>
        {isEvaluated && <h2>Score: {score}</h2>}
      </header >
      <main>

        {/* mapear las lecciones */}

        {/* lessonsData: es la variable que "guarda" de forma oficial el array que vino de la base de datos */}
        {/* Si lessonsData existe y tiene datos (es verdadero), ENTONCES ejecuta el .map(). Si es null o está vacío, 
        no hagas nada todavía y espera */}
        {/* Los datos están viajando desde la bbdd y lessonsData está vacío. Si la condicison lessonsData, el código se rompería */}
        {lessonsData && lessonsData.lessons.map((lesson, index) => (
          <article key={lesson.id_lesson}>
            <h2>{`LESSON ${index + 1}`}</h2>
            <div>
              <h3>{lesson.type}</h3>
              <span>{lesson.level}</span>
            </div>

            <h4>{lesson.title}</h4>

            <section>
              <h3>Multiple choice questions</h3>
              {/* filtrar las preguntas por su type === multiple choice y mapearlas*/}
              {lesson.questions
                .filter(question => question.type === 'multiple choice')
                .map(question => {

                  const correctAnswerText = question.answers.find(answer => answer.is_correct === true)?.answer_text || '';

                  const userAnswer = userSelection[question.id_question] || '';

                  return (

                    <div key={question.id_question}>
                      {/*  mapear las respuestas segun su pregunta (id_question)*/}
                      <p>{question.question_text}</p>

                      <ul>

                        {question.answers.map(answer => {

                          let answerStyleClass = "";
                          if (isEvaluated) {
                            if (answer.is_correct) {
                              // La correcta de la DB siempre se pone verde (para mostrar la solución)
                              answerStyleClass = "correct-answer-text";
                            } else if (userAnswer === answer.answer_text) {
                              // Si el usuario marcó esta y era falsa, se pone roja
                              answerStyleClass = "incorrect-answer-text";
                            }
                          }

                          return (

                            <li>

                              <input type="radio"
                                name={`question_${question.id_question}`}
                                value={answer.answer_text}
                                checked={userAnswer === answer.answer_text}

                                disabled={isEvaluated} // Se bloquea al evaluar
                                onChange={() => handleSaveAnswer(question.id_question, answer.answer_text)}
                              />

                              {/* El texto de la respuesta se pintará según las clases CSS */}
                              <span className={answerStyleClass}>{answer.answer_text}</span>

                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
            </section>

            <section>
              <h3>Fill in the blank questions</h3>
              {/* filtrar las preguntas por su type Fill in the blank y mapearlas*/}
              {lesson.questions
                .filter(question => question.type === 'Fill in the blank')
                .map(question => {
                  const correctAnswer = question.answers.find(a => a.is_correct === true)?.answer_text || '';
                  const userAnswer = userSelection[question.id_question] || '';

                  let inputClass = "";

                  if (isEvaluated) {
                    inputClass = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
                      ? "correct"
                      : "incorrect";
                  }

                  return (
                    <div key={question.id_question}>
                      <p>{question.question_text}</p>

                      {/* Conectamos el input al estado usando onChange */}
                      <input
                        type="text"
                        placeholder="Type your answer..."
                        value={userAnswer}
                        className={inputClass} // Clase dinámica (verde/rojo)
                        onChange={(ev) => handleSaveAnswer(question.id_question, ev.target.value)}
                        disabled={isEvaluated} // Opcional: bloquea el input tras evaluar
                      />
                    </div>
                  );
                })}
            </section>

            <button type="button" className="answer_box" onClick={() => handleTestLesson(lesson)}>
              TEST ANSWERS
            </button>

          </article>
        ))}

      </main>
    </>

  )
}



// Usar un useState para el boton de "TEST ANSWERS" y mirar como puedes convertir a array los datos de la bbdd, porque sino el map no sirve

//En google me va, en firefox no

//Las respuestas del fill in the blank en el reading están mal, solo debe haber una true y no debe verse en pantalla

