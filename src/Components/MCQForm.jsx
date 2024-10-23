import React, { useState } from 'react';

export default function MCQForm({ mcqs }) {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedScore = mcqs.reduce((acc, mcq, index) => {
      if (answers[index] === mcq.answer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(calculatedScore);
  };

  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {mcqs.map((mcq, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-semibold mb-2">{mcq.question}</p>
              <div className="flex flex-col">
                {mcq.options.map((option) => (
                  <label key={option.id} className="mb-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option.text}
                      checked={answers[index] === option.text}
                      onChange={() => handleAnswerChange(index, option.text)}
                      className="mr-2"
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        {score !== null && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              Your Score: {score} / {mcqs.length}
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
