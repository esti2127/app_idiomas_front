import React from 'react'

export const HomeAdminPage = () => {

  const handleLessonsClick = () => {
  navigate(); 
};



  return (
    
    <div>
      <button onClick={() => handleLessonsClick(lesson.id_lesson)} >Lessons</button>
      <button >Questions</button>
      <button>Users</button>
    </div>
  )
}
