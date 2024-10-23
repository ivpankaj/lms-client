


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Layout from '../Components/Layout';

const api = process.env.REACT_APP_API_URL;

const Practice = () => {
  const [titles, setTitles] = useState([]);
  const [testData, setTestData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [pastResults, setPastResults] = useState({});
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');
  const [answerResults, setAnswerResults] = useState({});
  const [currentTitle, setCurrentTitle] = useState(null);
  const [quizAttempted, setQuizAttempted] = useState(false); // Track if quiz has been attempted
  const navigate = useNavigate();
  const token = Cookies.get('token');

  useEffect(() => {
    const getTitles = async () => {
      try {
        const response = await fetch(`${api}mcq/getTitles`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'authorization': token,
          },
        });
        if(response.ok){
        const data = await response.json();
        setTitles(data);
        }else{
          setTitles([])
        }
      } catch (error) {
        console.error('Error fetching titles', error);
      }
    };

    getTitles();
  }, [api, token]);

  const handleTitleClick = async (titleId) => {
    try {
      // Clear previous data
      setTestData([]);
      setSelectedAnswers({});
      setPastResults({});
      setScore(null);
      setMessage('');
      setQuizAttempted(false);

      // Fetch questions
      const questionsResponse = await fetch(`${api}mcq/getQuestionsByTitle/${titleId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'authorization': token,
        },
      });
      const questionsData = await questionsResponse.json();

      // Fetch past results
      const pastResultsResponse = await fetch(`${api}mcq/getPastResults/${titleId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'authorization': token,
        },
      });
     
      const pastResultsData = await pastResultsResponse.json();

      if (pastResultsData.answers) {
        pastResultsData.answers = JSON.parse(pastResultsData.answers);
      }

      // Process questions data
      questionsData.forEach((test) => {
        if (typeof test.answer_key === 'string') {
          test.answer_key = JSON.parse(test.answer_key);
        }
      });

      // Set state
      setTestData(questionsData);
      setCurrentTitle(titleId);
      setPastResults(pastResultsData);
      setSelectedAnswers(pastResultsData.answers || {});
      setAnswerResults(pastResultsData.answers || {});
      setScore(pastResultsData.score || null);
      setMessage(pastResultsData.score ? `Your past score: ${pastResultsData.score}%` : '');

      // Set quiz attempted status
      setQuizAttempted(!!pastResultsData.score);

    } catch (error) {
      console.error('Error fetching questions or past results', error);
    }
  };

  const handleBack = () => {
    setCurrentTitle(null);
    setTestData([]);
    setSelectedAnswers({});
    setPastResults({});
    setScore(null);
    setMessage('');
    setQuizAttempted(false);
  };

  const handleChange = (testId, value) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [testId]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let calculatedScore = 0;
    let allAnswered = true;
    const results = {};

    testData.forEach((test) => {
      const selectedAnswer = selectedAnswers[test.id];
      if (!selectedAnswer) {
        allAnswered = false;
        return;
      }
      const isCorrect = parseInt(selectedAnswer) === test.correct_option;
      if (isCorrect) calculatedScore += 1;
      results[test.id] = {
        isCorrect,
        selectedAnswer: parseInt(selectedAnswer),
      };
    });

    if (!allAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    const finalScore = (calculatedScore / testData.length) * 100;
    setScore(finalScore);
    setMessage(finalScore === 100 ? 'All answers are correct!' : 'Check your answers.');
    setAnswerResults(results);

    // Save answers to database
    try {
      await fetch(`${api}mcq/saveAnswers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'authorization': token,
        },
        body: JSON.stringify({
          titleId: currentTitle,
          answers: selectedAnswers,
          score: finalScore,
        }),
      });
    } catch (error) {
      console.error('Error saving answers', error);
    }
  };

  if (!testData.length && currentTitle) return <div>Loading questions...</div>;

  return (
    <Layout>
      <div className="w-full h-full p-8">
        {!currentTitle ? (
     <>
     <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Choose Your Quiz</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {titles.map((title) => (
         <div
           key={title.id}
           className="relative p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 hover:rotate-1 duration-100"
         >
           <h2 className="text-xl font-semibold mb-4">{title}</h2>
           <button
             onClick={() => handleTitleClick(title)}
             className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md transition-colors hover:bg-gray-100"
           >
             Start Quiz
           </button>
         </div>
       ))}
     </div>
   
     <style jsx>{`
       .relative {
         perspective: 1000px;
       }
       .relative:hover .bg-gradient-to-r {
         animation: colorChange 7s infinite alternate;
       }
       @keyframes colorChange {
         0% {
           background: linear-gradient(to right, #ff7e5f, #feb47b);
         }
         50% {
           background: linear-gradient(to right, #6a11cb, #2575fc);
         }
         100% {
           background: linear-gradient(to right, #ff6f61, #de6262);
         }
       }
     `}</style>
   </>
   
      
        ) : (
          <>
            <button 
              onClick={handleBack} 
              className="mb-6 text-blue-500 hover:underline"
            >
              &larr; Back to Quizzes
            </button>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Complete Your Exam</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4">
              {testData.map((test, index) => (
                <div key={test.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {test.question_text}?
                  </h3>
                  {test.answer_key.map((answer, idx) => {
                    const isSelected = selectedAnswers[test.id] === (idx).toString();
                    const isCorrect = test.correct_option === idx;
                    const pastAnswer = pastResults.answers ? pastResults.answers[test.id] : null;
                    const optionClasses = `p-2 rounded-lg mb-2 cursor-pointer ${
                      score !== null
                        ? isSelected
                          ? isCorrect
                            ? 'bg-green-200'
                            : 'bg-red-200'
                          : isCorrect && pastAnswer === idx
                          ? 'border-2 border-green-500'
                          : 'bg-gray-100'
                        : 'bg-gray-100'
                    }`;

                    return (
                      <div key={idx} className={optionClasses}>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`answer_${test.id}`}
                            value={idx}
                            onChange={(e) => handleChange(test.id, e.target.value)}
                            className="mr-2"
                            checked={isSelected}
                            disabled={score !== null}
                          />
                          {answer}
                        </label>
                      </div>
                    );
                  })}
                </div>
              ))}
              <button
                type="submit"
                className={`px-6 py-3 mt-4 bg-gray-800 text-white font-semibold rounded-lg transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 ${
                  quizAttempted ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={quizAttempted}
              >
                Submit Answers
              </button>
            </form>
            {score !== null && (
              <div className="mt-6 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Your Score</h2>
                <p className="text-2xl font-bold text-gray-800">{score}%</p>
                <p className={`text-lg ${score === 100 ? 'text-green-500' : 'text-red-500'}`}>
                  {message}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Practice;
