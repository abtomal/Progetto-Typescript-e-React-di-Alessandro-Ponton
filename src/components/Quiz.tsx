import React, { useState } from 'react';

interface QuizProps {
  endQuiz: (score: number) => void;
}

interface Question {
  question: string;
  options: string[];
  correct: string;
}

const questions: Question[] = [
  {
    question: 'Qual è il materiale più ecologico per fabbricare l’abbigliamento?',
    options: ['Cotone', 'Poliestere', 'Lana', 'Canapa'],
    correct: 'Canapa',
  },
  {
    question: 'In che modo impatta maggiormente l’industria della moda sull’ambiente?',
    options: ['Inquinamento dell’aria', 'Uso di acqua', 'Emissioni di CO2', 'Sfruttamento del suolo'],
    correct: 'Uso di acqua',
  },
  {
    question: 'Quale di questi è considerato un materiale biodegradabile?',
    options: ['Poliestere', 'Nylon', 'Cotone', 'Acrilico'],
    correct: 'Cotone',
  },
  {
    question: 'Qual è la percentuale di abbigliamento riciclato nel mondo?',
    options: ['12%', '21%', '48%', '1%'],
    correct: '1%',
  },
  {
    question: 'Quale certificazione garantisce che i capi sono stati prodotti in modo etico?',
    options: ['Fair Trade', 'ISO-XO', 'MINT', 'NO CAP'],
    correct: 'Fair Trade',
  },
];

const Quiz: React.FC<QuizProps> = ({ endQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        endQuiz(score + (answer === questions[currentQuestionIndex].correct ? 1 : 0));
      }
      setSelectedAnswer(null);
    }, 500);
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div className="options-container">
        {questions[currentQuestionIndex].options.map((option) => (
          <button
            key={option}
            className={`answer-choice ${
              selectedAnswer === option
                ? option === questions[currentQuestionIndex].correct
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
            onClick={() => handleAnswer(option)}
            disabled={!!selectedAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
