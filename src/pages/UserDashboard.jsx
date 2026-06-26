import React, { useContext, useEffect } from 'react'
import { useFetchDataDB } from '../hooks/useFetchLessonData'

import { useNavigate } from 'react-router';
import { QuestionContext } from '../contexts/QuestionContext';

export const UserDashboard = () => {


  const navigate = useNavigate();


  const { data, isLoading, error, getData } = useFetchDataDB()

  const {
      score,
      setScore,
      userSelection,
      setuserSelection,
      handleChosenAnswer
  }=useContext(QuestionContext)
console.log({handleChosenAnswer})
console.log({score})


  useEffect(() => {
    getData(`${import.meta.env.VITE_URL_BASE_BACK}/lessons`, {
      headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}` }
    })
  }, [])




  // "id_lesson": 5,
  // "title": "Essential Airport Vocabulary",
  // "level": "B1",
  // "type": "vocabulary",
  // "is_published": true


  const handleLessonClick = (id) => {
  navigate(`/lessons/${id}`); 
};


  return (

    <>
      
      {isLoading ? <p>Loading...</p>
      
      :

    <div>
    
     {data.lessons.map((lesson) => (

      <button onClick={() => handleLessonClick(lesson.id_lesson)} key={lesson.id_lesson}>

        <h2>{LESSON }</h2>

        <p>{lesson.title}</p>
        <p>{lesson.level}</p>
        <p>{lesson.type}</p>

      </button>

      ))
      
    }
    </div>}

    </>
  )

}



























































