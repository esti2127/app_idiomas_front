// import React from 'react'
// // import { Lesson } from './Lesson'

// import { useFetchDataDB } from '../hooks/useStateLessonData'
// import { usequestionCard } from '../hooks/useStateQuestionCorrect'

// export const Screen_lessons = () => {

//   const { lessonsData } = useFetchDataDB();

//   const { handleTestLesson } = usequestionCard();

//   return (
//     <>
//       <header>
//         <h1>Lessons</h1>
//       </header>
//       <main>

//         {/* mapear las lecciones */}

//         {lessonsData?.map((lesson, index) => (
//           <article key={lesson.id_lesson}>
//             <h2>{`LESSON ${index + 1}`}</h2>
//             <div>
//               <h3>{lesson.type}</h3>
//               <span>{lesson.level}</span>
//             </div>

//             <h4>{lesson.title}</h4>

//             <section>
//               <h3>Multiple choice questions</h3>
//               {/* filtrar las preguntas por su type === multiple choice y mapearlas*/}
//               {lesson.questions
//                 .filter(question => question.type === 'multiple choice')
//                 .map(question => (
//                   <div key={question.id_question}>
//                     {/*  mapear las respuestas segun su pregunta (id_question)*/}
//                     <p>{question.question_text}</p>
//                     {question.answers.map(answer => (
//                       <p key={answer.id_answer}>{answer.answer_text}</p>
//                     ))}
//                   </div>
//                 ))}
//             </section>

//             <section>
//               <h3>Fill in the blank questions</h3>
//               {/* filtrar las preguntas por su type Fill in the blank y mapearlas*/}
//               {lesson.questions
//                 .filter(question => question.type === 'Fill in the blank')
//                 .map(question => (
//                   <div key={question.id_question}>
//                     {/*  mapear las respuestas segun su pregunta (id_question)*/}
//                     <p>{question.question_text}</p>
//                     {question.answers.map(answer => (
//                       <p key={answer.id_answer}>{answer.answer_text}</p>
//                     ))}
//                   </div>
//                 ))}
//             </section>

//             <button type="button" className="answer_box" onClick={() => handleTestLesson(lesson)}>
//               TEST ANSWERS
//               </button>
//           </article>
//         ))}

//       </main>
//     </>

//   )
// }



// Usar un useState para el boton de "TEST ANSWERS" y mirar como puedes convertir a array los datos de la bbdd, porque sino el map no sirve



