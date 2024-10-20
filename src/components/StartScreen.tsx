import React from 'react';

interface StartScreenProps {
  startQuiz: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ startQuiz }) => {
  return (
    <div className='start-container'>
      <h1>Quiz sulla Moda Sostenibile</h1>
      <p>Partecipa e scopri il tuo livello di conoscenza sul mondo della moda sostenibile!</p>
      <button onClick={startQuiz}>Inizia il Quiz</button>
    </div>
  );
};

export default StartScreen;
