import React, { useEffect } from 'react'
import { useFetchLessonData } from '../hooks/useFetchLessonData';
import { useParams } from 'react-router';

export const Question = (req) => {

  const { id } = useParams()

  const url = import.meta.env.VITE_URL_BASE_BACK

  const { data, isLoading, error, getData } = useFetchLessonData();

  useEffect(() => {

    getData(`${url}/lessons/with_data/${id}`, {
      headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`}
    })

  }, [id])

  return (

    <>

      {/* <p>{JSON.stringify(data)}</p> */}

      {isLoading ? <p>Loading...</p>

        :


        <article key={data.id_question}>

          {/* <p>{JSON.stringify(data.lessons[0].questions)}</p> */}

          <section>

            {/* <GridQuestions  type={question.type}*/}
             

            <h3>Multiple choice questions</h3>

            {data.lessons[0].questions.filter(question => question.type === 'multiple choice')

              .map((question) => (


                 /* Question question={question} type={question.type}*/

                <div key={question.id_question}>

                  <p>{question.question_text}</p>

                  {question.answers.map((answer) => (

                    <p key={answer.id_answer}>{answer.answer_text}</p>

                  ))
                  }
 
                </div>

              ))
            }

          </section>

          <section>

            <h3>Fill in the blank</h3>

            {data.lessons[0].questions.filter(question => question.type === 'Fill in the blank')

              .map((question) => (

                <div key={question.id_question}>

                  <p>{question.question_text}</p>

                  {question.answers.map((answer) => (

                    <p key={answer.id_answer}>{answer.answer_text}</p>

                  ))
                  }

                </div>

              ))
            }

          </section>

        </article>

      }

    </>
  )
}








// <article key={lesson.id_lesson}>

//   <h2>{`LESSON ${index + 1}`}</h2>

//   <div>
//     <h3>{lesson.type}</h3>
//     <span>{lesson.level}</span>
//   </div>

//   <h4>{lesson.title}</h4>

//   <section>

//     <h3>Multiple choice questions</h3>

//     {/* recogemos todas las lecciones, pero queremos que haya dos grupos, los que tienen question.type === 'multiple choice' y los que tienen question.type = 'Fill in the blank'*/}

//     {lesson.questions
//       .filter(question => question.type === 'multiple choice').map((question) => {

//         return (

//           <>

//            <div key={question.id_question}>
//             <p>{question.question_text}</p>
//             {question.answers.map((answer) => {

//               return (

//                 <div key={answer.id_answer}>
//                 <p>{answer.answer_text}</p>
//                 </div>

//               )
//             })}

//             </div>

//           </>

//         )
//       })}
//   </section>

//   <section>

//     <h3>Fill in the blank questions</h3>

//     {lesson.questions
//       .filter(question => question.type === 'Fill in the blank').map((question) => {

//         return (

//           <>
//             <p>{question.question_text}</p>
//             {question.answers.map((answer) => {

//               return (

//                 <p>{answer.answer_text}</p>

//               )

//             })}

//           </>

//         )

//       })
//     }
//   </section>

// </article>



//   ))
// )


// }













