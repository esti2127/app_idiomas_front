import React, { useState } from 'react'

export const useQuestionCard = () => {
  // que al clickar sobre el botón "TEST ANSWERS" las respuestas true se pongan en verde y las false en rojo 
  // El estado será respuesta verde o roja


  //con este useState  vamos a guardar las respuestas del usuario para poder evaluarlas 
  const [userSelection, setUserSelection] = useState({});

  //con este useState vamos a gestionar la funcionalidad del click sobre el botón "TEST ANSWERS" y vamos a aplicar los colores verde y rojo dependiendo de si la respuesta marcada ha sido la correcta o no
  const [isEvaluated, setIsEvaluated] = useState(false);


  //con este useState vamos a ir guardando las respuestas para pdoer mostrar en pantalla cuantas ha acertado en total
  const [score, setScore] = useState(null);

  //Declaramos una función que recibe el id de la pregunta y el texto marca el usuario
  const handleSaveAnswer = (questionId, text) => {

    //creamos una copia del estado de la seleccion del usuario (de la respuesta)
    const newSelection = { ...userSelection };
    //para la pregunta con el id X, guarda la respuesta marcada por el usuario para esa pregunta 
    newSelection[questionId] = text;
    //actualizamos el estado con la respuesta del usuario para la pregunta correspondiente 
    setUserSelection(newSelection);
  };

  // gestionamos la respuesta
  const handleTestLesson = (currentLesson) => {

    //esto es el marcador para el score, que empieza en 0
    let correctCount = 0;
    //preguntas por leccion
    const totalQuestions = currentLesson.questions.length;
    //para cada pregunta de la lección
    currentLesson.questions.forEach(question => {

      //guardamos la respuesta marcada por el usuario 
      const selectionUser = userSelection[question.id_question];

      //bsucamos la respuesta correcta dentro de las respuestas asociadas a la pregunta que esta contestando el usuario
      const answerCorrectDB = question.answers.find(answer => answer.is_correct === true);

      //trimamos la respuesta de fill in the blank del usuario y la pasamos a minúscula para compararla con la correcta de la bbdd 
      const userText = (selectionUser || "").trim().toLowerCase();
      //con la respuesta true de la bbdd hacemos lo mismo: la trimamos y la pasamos a minúscula 
      const dbText = (answerCorrectDB?.answer_text || "").trim().toLowerCase();

      //si la respuesta escrita por el usuario y la respuesta en la bbd coinciden 
      if (userText === dbText) {
        //añade a la score una respuesta correcta 
        correctCount++;
        //esto es más para una compprobacion en la consola, en la pantalla no se va a ver 
        console.log(`Question ${question.id_question}: ¡Correct!`);
      } else {
        console.log(`Question ${question.id_question}: Incorrect...`);
      }
    });

      // pero además quiero que las respuestas se almacenen para que el usuario pueda ver el score cuando termine la lección (que le salga en pantalla)

    //el socre será: las respuestas correctas del usuario/el total de las preguntas 
    setScore(`${correctCount} / ${totalQuestions}`);

    //aqui indicamos que el usuario ya ha testeado las respuestas porque ha marcado el boton de TEST ANSWERS
    setIsEvaluated(true);
    // si la respuesta es correcta (true)
    // if(ev.target.answer_box.value === answers.is_correct){
    //   // answer to green
    //   setValor(true)
    // }
    // answer to red
  }

  return {
    userSelection,
    isEvaluated,
    score,
    handleSaveAnswer,
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
