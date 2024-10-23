import React from 'react';
import { FaInfoCircle, FaFileUpload } from 'react-icons/fa';

function ProjectCard({ project, onDetailsClick }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600">
          <FaFileUpload />
          <span>Upload</span>
        </button>
        <button 
          onClick={() => onDetailsClick(project.id)} 
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600"
        >
          <FaInfoCircle />
          <span>Details</span>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
