import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';

const technologies = [
  { id: 1, title: 'React-Js' },
  { id: 2, title: 'Node-Js' },
  { id: 3, title: 'Express-Js' },
  { id: 4, title: 'Mongoose' },
  { id: 5, title: 'MySql' },
  { id: 6, title: 'Mongodb' },
  { id: 7, title: 'JavaScript' },
  { id: 8, title: 'Tailwind Css' },
  { id: 9, title: 'Next-JS' },
  { id: 10, title: 'React-Native' },
  { id: 11, title: 'DSA with JavaScript' }
];


const Project = () => {
  // Directly use static data
  const [projects] = useState(technologies);

  return (
    <Layout>
      <div className="w-full h-full px-4 py-8 bg-white">
        <h1 className="text-3xl font-extrabold text-black mb-8 text-center">
          Choose Your Technology
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl mx-auto">
          {projects.map((item) => (
            <div
              key={item.id}
              className={`p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105  hover:shadow-2xl hover:-translate-y-2 duration-300 ease-in-out`}
            >
              <h2 className="text-lg sm:text-xl md:text--2xl font-semibold text-black mb-4 text-center">{item.title}</h2>
              <Link to={`/dashboard/projects/${item.id}`} className="mt-4">
                <button className="px-1 py-1 sm:px-2 sm:py-1 text-sm sm:text-lg text-white font-bold bg-opacity-90 bg-black rounded-md transition-colors hover:bg-opacity-80 focus:outline-none">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
