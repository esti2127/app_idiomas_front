import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useFetchLessonData } from '../../hooks/useFetchLessonData';
import { ButtonNumberLesson } from '../../components/user/ButtonNumberLesson';
import { QuestionContext } from '../../contexts/QuestionContext';

export const LessonsPage = () => {

  const { data, isLoading, error, getData } = useFetchLessonData()

  const { score } = useContext(QuestionContext)

  useEffect(() => {
    getData(`${import.meta.env.VITE_URL_BASE_BACK}/lessons`, {
      headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}` }
    })
  }, [])


  return (

    <>

      {isLoading ? <p>Loading...</p>

        :

        <div>

          {/* gestionar el error pintando el mensaje del catch del back. La interrogacion no es la solucion */}

          {data.lessons.map((lesson) => (

            <ButtonNumberLesson lesson={lesson} key={lesson.id_lesson} />

          ))

          }
        </div>}

    </>
  )

}


