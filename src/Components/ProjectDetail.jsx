import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';

// Define the content for each technology
const technologyDetails = {
  "React-Js": {
    title: 'ReactJS',
    description:
      'ReactJS is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data without reloading the page. Its main goal is to be fast, scalable, and simple.',
    projects: [
      { name: 'Todo App', description: 'A simple application to manage your tasks.' },
      { name: 'Calculator', description: 'A basic calculator to perform arithmetic operations.' },
      { name: 'Social Media Dashboard', description: 'A simple application to manage your tasks.' },
      { name: 'Timer', description: 'A basic calculator to perform arithmetic operations.' },
    ],
  },
  "Node-Js": {
    title: 'NodeJS',
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server, making it ideal for building fast and scalable network applications.",
    projects: [
      { name: 'Chat Server', description: 'A server for real-time chat applications.' },
      { name: 'REST API', description: 'A RESTful API for handling requests and responses.' },
      { name: 'QR code Generator', description: 'A server for real-time chat applications.' },
      { name: 'REST API', description: 'A RESTful API for handling requests and responses.' },
    ],
  },
  "Express-Js": {
    title: 'Express',
    description:
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.',
    projects: [
      { name: 'Blog Platform', description: 'A platform for creating and managing blogs.' },
      { name: 'API Server', description: 'A server for handling API requests.' },
      { name: 'Blog Platform', description: 'A platform for creating and managing blogs.' },
      { name: 'API Server', description: 'A server for handling API requests.' },
    ],
  },
  "Mongoose": {
    title: 'Mongoose',
    description:
      'Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and representation in MongoDB.',
    projects: [
      { name: 'User Management', description: 'An application for managing user data.' },
      { name: 'Inventory System', description: 'A system for tracking inventory items.' },
      { name: 'User Management', description: 'An application for managing user data.' },
      { name: 'Inventory System', description: 'A system for tracking inventory items.' },
    ],
  },
  "MySql": {
    title: 'MySql',
    description:
      'MySql is a popular relational database management system. It is known for its reliability, ease of use, and performance, making it a popular choice for managing data in web applications.',
    projects: [
      { name: 'E-Commerce Site', description: 'An online store with product management.' },
      { name: 'Customer Database', description: 'A database for storing customer information.' },
      { name: 'E-Commerce Site', description: 'An online store with product management.' },
      { name: 'Customer Database', description: 'A database for storing customer information.' },
    ],
  },
  "Mongodb": {
    title: 'MongoDB',
    description:
      'MongoDB is a NoSQL database that uses a document-oriented data model. It is designed for scalability and performance, and is commonly used for building modern, data-intensive applications.',
    projects: [
      { name: 'Real-Time Analytics', description: 'A system for analyzing data in real-time.' },
      { name: 'Content Management', description: 'A CMS for managing content in various formats.' },
      { name: 'Real-Time Analytics', description: 'A system for analyzing data in real-time.' },
      { name: 'Content Management', description: 'A CMS for managing content in various formats.' },
    ],
  },
  "JavaScript": {
    title: 'JavaScript',
    description:
      'JavaScript is a versatile, high-level programming language primarily used for adding interactivity and dynamic features to websites. It is also widely used on the server-side with environments like Node.js. Known for its flexibility and widespread use, JavaScript is a key component of modern web development.',
    projects: [
      { name: 'Interactive Quiz', description: 'A quiz application with dynamic questions.' },
      { name: 'Drawing App', description: 'An app for creating and editing drawings.' },
      { name: 'Interactive Quiz', description: 'A quiz application with dynamic questions.' },
      { name: 'Drawing App', description: 'An app for creating and editing drawings.' },
    ],
  },
  "Tailwind Css": {
    title: 'Tailwind Css',
    description:
      'Tailwind CSS is a utility-first CSS framework that provides a collection of low-level utility classes for building custom designs quickly. With features like responsive design utilities and configuration options, Tailwind CSS simplifies the creation of visually appealing and highly customizable user interfaces.',
    projects: [
      { name: 'Landing Page', description: 'A landing page with responsive design.' },
      { name: 'Dashboard', description: 'A customizable dashboard for data visualization.' },
      { name: 'Landing Page', description: 'A landing page with responsive design.' },
      { name: 'Dashboard', description: 'A customizable dashboard for data visualization.' },
    ],
  },
  "Next-JS": {
    title: 'Next-JS',
    description:
      'Next.js is a popular React framework for building server-rendered applications and static websites. It offers features like automatic server-side rendering (SSR) and static site generation (SSG), improving performance and SEO. With a focus on both developer experience and application performance, Next.js is widely used for building scalable and high-performance web applications.',
    projects: [
      { name: 'Blog Site', description: 'A static blog site with SEO optimization.' },
      { name: 'E-Commerce Platform', description: 'A scalable e-commerce platform with server-side rendering.' },
      { name: 'Blog Site', description: 'A static blog site with SEO optimization.' },
      { name: 'E-Commerce Platform', description: 'A scalable e-commerce platform with server-side rendering.' },
    ],
  },
};


const ProjectDetail = () => {
  const { technology } = useParams(); // Get the technology from the URL
  const selectedTechnology = technologyDetails[technology]; // Get the details for the selected technology

  if (!selectedTechnology) {
    return <div>Technology not found</div>;
  }

  return (
    <Layout>
      <div className="w-full h-full overflow-y-auto p-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{selectedTechnology.title}</h1>
        <p className="mb-6 text-lg text-gray-700">{selectedTechnology.description}</p>
        <div className="mt-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
          {selectedTechnology.projects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
