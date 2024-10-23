import React, { useState } from 'react';

export default function ExamPage({ technology }) {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    { id: 'q1', question: 'What is React?', options: ['Library', 'Framework', 'Language', 'Platform'], correct: 'Library' },
    { id: 'q2', question: 'What is Node.js?', options: ['Runtime', 'Library', 'Language', 'Framework'], correct: 'Runtime' },
    { id: 'q3', question: 'What is Express?', options: ['Framework', 'Library', 'Language', 'Runtime'], correct: 'Framework' },
    { id: 'q4', question: 'What is Mongoose?', options: ['ODM', 'ORM', 'Library', 'Framework'], correct: 'ODM' },
  ];

  const handleChange = (id, option) => {
    setAnswers({ ...answers, [id]: option });
  };

  const handleSubmit = () => {
    const totalQuestions = questions.length;
    const correctAnswers = questions.filter(q => answers[q.id] === q.correct).length;
    setScore((correctAnswers / totalQuestions) * 100);
  };

  return (
    <>
      <div className="w-full h-full overflow-y-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8">{technology} Exam</h1>
        <div className="w-full max-w-3xl">
          {questions.map(question => (
            <div key={question.id} className="bg-white p-6 mb-6 border border-gray-300 rounded-lg shadow-md">
              <p className="font-semibold text-lg mb-4">{question.question}</p>
              <div className="space-y-3">
                {question.options.map(option => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      onChange={() => handleChange(question.id, option)}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-3 text-gray-800">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {score !== null && (
            <div className="mt-6 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Your Score</h2>
              <p className="text-2xl font-bold text-gray-800">{score.toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
