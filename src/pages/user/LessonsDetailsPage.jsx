import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useFetchLessonData } from '../../hooks/useFetchLessonData';
import { Question } from '../../components/QuestionDelete';
import { GridQuestions } from '../../components/user/GridQuestions';

export const LessonsDetailsPage = () => {
 
  const { id } = useParams()


 
  const { data, isLoading, error, getData } = useFetchLessonData();


  useEffect(() => {

    // Aquí no creo que tenga sentido usar una query que me trae toda la información si solo necesito los datos de la leccion. 
    getData(`${import.meta.env.VITE_URL_BASE_BACK}/lessons/with_data/${id}`, {
      headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}` }
    })
  }, [id])

  return (

    <>

     {/* <p>{JSON.stringify(data, null, 2)}</p> */}




      {isLoading ? <p>Loading...</p>

        :

        <div>

          <article key={data.id_lesson}>

            <h2>{`LESSON ${id}`}</h2>

            <div>

              <p>{data.lessons[0].title}</p>
              <p>{data.lessons[0].level}</p>
              <p>{data.lessons[0].type}</p>

            </div>

          </article>

          <section>

            <GridQuestions id={id}/>

          </section>

          

        </div>

      }

    </>

  )
}
