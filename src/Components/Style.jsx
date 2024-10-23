import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-300', 'bg-orange-500', 'bg-pink-500'];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Total_courses = () => {
  const [bgColor1, setBgColor1] = useState(getRandomColor());
  const [bgColor2, setBgColor2] = useState(getRandomColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor1(getRandomColor());
      setBgColor2(getRandomColor());
    }, 800); // Change color every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <div className="flex flex-col gap-8 w-full max-w-screen-lg md:flex-row">
        <div
          className={w-full max-w-md p-8 text-white rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-transform duration-500 ${bgColor1} hover:rotate-3 hover:translate-y-2}
          style={{ transition: 'background-color 1s ease-in-out' }}
        >
          <span className="text-2xl font-semibold mb-4">Full Stack Developer</span>
          <Link to='/total_students'><button className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors">Get Enrolled Student</button></Link>
        </div>
        <div
          className={w-full max-w-md p-8 text-white rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-transform duration-500 ${bgColor2} hover:rotate-3 hover:translate-y-2}
          style={{ transition: 'background-color 1s ease-in-out' }}
        >
          <span className="text-2xl font-semibold mb-4">Digital Marketing</span>
          <Link to='/total_students'><button className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors">Get Enrolled Student</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Total_courses;