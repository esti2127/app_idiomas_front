// import React, { useEffect, useState } from 'react'


// export const useFetchDataDB = () => {

//   const [lessonsData, setLessonsData] = useState([]);

//   useEffect(() => {
//     const getLessons = async () => {
//       try {
//         // endpoint del backend que hace el SELECT * FROM lessons
//         const response = await fetch('http://localhost:3000/api/lessons/with_data');

//         if (!response.ok) {
//           throw new Error(`${response.status}`);
//         }

//         const data = await response.json();

//         // Guardamos las lecciones reales de la DB en el estado
//         setLessonsData(data.lessons);
//       } catch (error) {
//         console.error("Error al traer las lecciones del backend:", error);
//       }
//     };

//     getLessons();
//   }, []);

//   return { lessonsData: Array.isArray(lessonsData) ? lessonsData : [] }

// }
