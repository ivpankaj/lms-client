// src/pages/About.js
import React from 'react';
import Layout from '../Components/Layout';

const About = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const profileurl = process.env.REACT_APP_PUBLIC_PROFILE_UR

  return (
    <Layout>
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-green-900">About Page</h1>
      </div>
    </Layout>
  );
};

export default About;
