import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';

const api = process.env.REACT_APP_API_URL;

const TestPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const [test, setTest] = useState(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await fetch(`${api}mcq/getbyid/${id}`);
        const data = await response.json();
        if (typeof data.answer_key === 'string') {
          data.answer_key = JSON.parse(data.answer_key);
        }
        console.log("Fetched Test Data:", data);
        setTest(data);
      } catch (error) {
        console.error('Error fetching test data', error);
      }
    };

    fetchTest();
  }, [id]);

  const handleChange = (value) => {
    // Only one answer can be selected, so set the selected answer for the current question
    setSelectedAnswers({ answer: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswers.answer) {
      setMessage('Please select an answer.');
      return;
    }

    // Check if the selected answer matches the correct option
    const isCorrect = parseInt(selectedAnswers.answer) === test.correct_option;
    const calculatedScore = isCorrect ? 100 : 0;
    setScore(calculatedScore);
    setMessage(isCorrect ? 'Correct answer!' : 'Incorrect answer.');
  };

  if (!test) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="w-full h-full p-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">{test.title}</h1>
        <form onSubmit={handleSubmit} className='bg-white rounded-lg p-4'>
          <div className='bg-white p-4'>
            <h3>Q. {test.question_text}?</h3>
          </div>
          {test.answer_key.map((answer, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="answer"
                  value={index + 1}
                  onChange={(e) => handleChange(e.target.value)}
                  className="mr-2"
                />
                {answer}
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="px-6 py-3 mt-2 bg-gray-800 text-white font-semibold rounded-lg transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Submit Answer
          </button>
        </form>
        {score !== null && (
          <div className="mt-6 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Your Score</h2>
            <p className="text-2xl font-bold text-gray-800">{score}%</p>
            <p className={`text-lg ${score === 100 ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TestPage;
