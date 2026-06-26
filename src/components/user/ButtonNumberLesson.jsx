import React from 'react'
import { useNavigate } from 'react-router';

export const ButtonNumberLesson = ({ lesson, index }) => {

    const navigate = useNavigate();

  const handleLessonClick = (id) => {
    navigate(`/lesson/${id}`);
  };

  return (
    <button onClick={() => handleLessonClick(lesson.id_lesson)} >

      <h2>{`LESSON ${index + 1}`}</h2>

      <p>{lesson.title}</p>
      <p>{lesson.level}</p>
      <p>{lesson.type}</p>

    </button>
  )
}
