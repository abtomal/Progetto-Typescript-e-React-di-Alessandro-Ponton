import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import ResultScreen from './components/ResultScreen';


const App: React.FC = () => {

  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const startQuiz = () => setQuizStarted(true);

  const endQuiz = (finalScore: number) => {
    setScore(finalScore);
    setQuizEnded(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setQuizEnded(false);
    setQuizStarted(false);
  };

  return (
    <div className='main-container'>
      {!quizStarted && !quizEnded && <StartScreen startQuiz={startQuiz} />}
      {quizStarted && !quizEnded && <Quiz endQuiz={endQuiz} />}
      {quizEnded && <ResultScreen score={score} restartQuiz={restartQuiz} />}
    </div>
  );
};

export default App;
