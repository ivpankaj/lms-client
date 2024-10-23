import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';

const Certificate = () => {
  const navigate = useNavigate();

  const certificates = [
    { id: 1, title: 'React Development', date: 'June 2024', issuer: 'SKillOnTime' },
    { id: 2, title: 'Web Design Fundamentals', date: 'May 2023', issuer: 'SKillOnTime' },
    { id: 3, title: 'Advanced JavaScript', date: 'April 2023', issuer: 'SKillOnTime' },
  ];

  const handleViewCertificate = (id) => {
    navigate(`/certificate/${id}`); // Navigate to the detail page with the certificate ID
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800"> Demo Certificates</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            Showcasing the achievements and certifications acquired over the years.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{cert.title}</h2>
              <p className="text-sm sm:text-base text-gray-500 mt-2">{cert.date}</p>
              <p className="text-sm sm:text-base text-gray-500">{cert.issuer}</p>
              <button
                className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
                onClick={() => handleViewCertificate(cert.id)}
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
