import React, { useState } from 'react'

export const usequestionCard = () => {
  // que al clickar sobre el botón "TEST ANSWERS" las respuestas true se pongan en verde y las false en rojo 
  // en la tabla answers: is_correct BOOLEAN NOT NULL DEFAULT false, entonces iamgino que de base la respuesta estaría en rojo, 
  // pero en ese caso el valor inicial es false o vacío?
  // El estado será respuesta verde o roja
  const [userSelection, setuserSelection] = useState({});

  // gestionamos la respuesta
  const handleTestLesson = (currentLesson) => {

    currentLesson.questions.forEach(question => {

      const selectionUser = userSelection[question.id_question];

      const answerCorrectDB = question.answers.find(answer => answer.is_correct === true);

      if (selectionUser === answerCorrectDB.answer_text) {
        console.log(`Question ${question.id_question}: ¡Correct!`)
      } else {
        console.log(`Question ${question.id_question}: Incorrect... ❌`);

      }
    })
    // si la respuesta es correcta (true)
    // if(ev.target.answer_box.value === answers.is_correct){
    //   // answer to green
    //   setValor(true)
    // }
    // answer to red
  }

  // pero además quiero que las respuestas se almacenen para que el usuario pueda ver el score cuando termine la lección (que le salga en pantalla)
  return {
    userSelection,
    setuserSelection,
    handleTestLesson
  }
}






// Usuario hace click en un Radio Button / Escribe en un Input
//          │
//          ▼
// Actualiza el estado 'userSelection' -> { [id_question]: "texto_elegido" }
//          │
//          ▼
// Usuario pulsa el botón "TEST ANSWERS" -> Dispara handleTestLesson(lesson)
//          │
//          ▼
// La función compara 'userSelection' con la respuesta de la DB que tiene 'is_correct === true'
