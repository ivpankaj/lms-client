import React from 'react';
import Layout from "../Components/Layout";

const NotesData = () => {
  const dummyNotes = [
    {
      title: "React Basics",
      content: "Understand the basics of React, including components, props, and state.",
      date: "August 20, 2024",
    },
    {
      title: "State Management",
      content: "Learn about state management using useState and useReducer hooks.",
      date: "August 21, 2024",
    },
    {
      title: "Component Lifecycle",
      content: "Explore the component lifecycle and the useEffect hook in React.",
      date: "August 22, 2024",
    },
  ];

  return (
      <div className="min-h-screen  p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Introduction Section */}
          <section className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Notes demo</h1>
            <p className="text-gray-700 mb-6">
              Welcome to the notes section! Here you can find a collection of notes on various topics, including React fundamentals, state management, and more. Browse through the notes to enhance your knowledge and stay updated.
            </p>
          </section>
          
          {/* Featured Note */}
          <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Featured Note: React Hooks</h2>
            <p className="text-gray-700 mb-4">
              Dive 5 deep into React Hooks, the powerful feature that allows you to use state and other React features without writing a class. Learn how hooks simplify state management and side effects in functional components.
            </p>
            <p className="text-gray-500 text-sm">Published: August 25, 2024</p>
          </section>
          
          {/* Recent Updates */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Updates</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>August 26, 2024:</strong> Added new notes on advanced React patterns.</li>
              <li><strong>August 24, 2024:</strong> Updated notes on state management with recent best practices.</li>
              <li><strong>August 22, 2024:</strong> Refreshed component lifecycle notes with new examples.</li>
            </ul>
          </section>

          {/* Categories */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full border border-blue-200">React Basics</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full border border-green-200">State Management</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full border border-yellow-200">Lifecycle Methods</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full border border-purple-200">Advanced Topics</span>
            </div>
          </section>

          {/* Note List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyNotes.map((note, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
                <p className="text-gray-600 mb-4">{note.content}</p>
                <p className="text-gray-500 text-sm">{note.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default NotesData;