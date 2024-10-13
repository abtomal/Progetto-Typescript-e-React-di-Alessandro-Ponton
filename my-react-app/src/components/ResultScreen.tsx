import React from 'react';

interface ResultScreenProps {
  score: number;
  restartQuiz: () => void;
}

const getSkillLevel = (score: number): string => {
  if (score <= 2) return 'Hypebeast 🙄';
  if (score <= 4) return 'Trendsetter 👗';
  return 'Fashion Master 💎';
};

const ResultScreen: React.FC<ResultScreenProps> = ({ score, restartQuiz }) => {
  const skillLevel = getSkillLevel(score);

  return (
    <div>
      <h1>Quiz completato!</h1>
      <h2><p>Il tuo punteggio è {score}</p>
      <p>Livello di competenza: {skillLevel}</p></h2>
      <button onClick={restartQuiz}>Ricomincia il Quiz</button>
    </div>
  );
};

export default ResultScreen;
