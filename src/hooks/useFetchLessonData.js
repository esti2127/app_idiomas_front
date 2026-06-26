import React, { useState } from 'react'

export const useFetchLessonData = () => {
 
  // la primera vez que se carga la pantalla lessonsData está vacío, no hay lecciones
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

 
    const getData = async (url, options) => {
      // console.log('opciones =',options)
      
      try {

        setIsLoading(true);

        // peticion con query en back a la bbdd
        const resp = await fetch(url, options);

        //Si la respuesta no ha sido la esperada y no nos devuelve las lecciones: 
        if (!resp.ok) {
          //lanzamos un error al catch con el estado del error
          throw new Error (resp.status);
        }

        //guardamos la respuesta de la peticion y la pasamso a un objeto json 
        const result = await resp.json();

        // console.log(data)

        // Guardamos las lecciones reales de la DB en el estado, o en su defecto un array vacío
        setData(result);
        setIsLoading(false)
        setError(null)

      } catch (error) {
        setError(error)
        setData(null)
        setIsLoading(false)
        console.error("Error al traer las lecciones:", error);
      }
    };

  
  //lessonsData es un array? pues pintame el array de las lecciones. No lo es? Pues al menos que screen_lessons.jsx reciba un array vacío y así la app no explota
  return { data, isLoading, error, getData }

}
