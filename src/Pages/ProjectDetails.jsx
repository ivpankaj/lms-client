import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { technologies } from './ProjectDetailsData'; // Import the updated data

const Project = () => {
  const { id } = useParams();
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [projects] = useState(technologies);
  const selectedTech = projects.find((tech) => tech.id === parseInt(id));
  const levels = ['beginner', 'medium', 'advanced'];

  // Handle project level selection
  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  return (
    <Layout>
      <div className="w-full h-full px-4 py-8 bg-white">
        <h1 className="text-3xl font-extrabold text-black mb-8 text-center">
          {selectedTech ? selectedTech.title : 'Choose Your Technology'}
        </h1>

        {selectedTech && selectedTech.title ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Project Level</h2>
              <div className="flex justify-center gap-6 mb-8 flex-wrap">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => handleLevelChange(level)}
                    className={`px-6 py-3 text-sm sm:text-lg font-bold rounded-full transition-colors focus:outline-none ${selectedLevel === level ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Display projects based on selected level */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl mx-auto">
              {selectedTech.projects[selectedLevel].map((project, index) => (
                <div
                  key={index}
                  className={`p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 bg-white hover:shadow-2xl hover:-translate-y-2 duration-300 ease-in-out`}
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 text-center">{project.title}</h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl mx-auto">
            {projects.map((item) => (
              <div
                key={item.id}
                className={`p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 bg-white hover:shadow-2xl hover:-translate-y-2 duration-300 ease-in-out`}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 text-center">{item.title}</h2>
                <Link to={`/dashboard/projects/${item.id}`} className="mt-4">
                  <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg text-white font-bold bg-black rounded-full transition-colors hover:bg-gray-800 focus:outline-none">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Project;
