

import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

export default function StudyBar({ onClose }) {
  const dropdownRef = useRef(null);
  
  let course = Cookies.get('course');

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        ref={dropdownRef}
        className="bg-white rounded-lg shadow-lg p-4 w-72"
      >
        <h1 className="font-bold text-lg">Registered in {Cookies.get('course')}</h1>
        <hr className="my-2" />
        <div className="flex items-center justify-between my-2">
          <p className="text-gray-700">Certification in {course}</p>
        </div>
        <button
          onClick={() => {
            window.open('https://skillontime.com/best-full-stack-development', '_blank');
          }}
          className="gap-2 px-4 py-2 w-full text-white bg-blue-600 border border-transparent font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Explore Full Stack Development Course
        </button>
        <button
          onClick={() => {
            window.open('https://skillontime.com/best-digital-marketing', '_blank');
          }}
          className="mt-2 px-4 py-2 w-full text-white bg-blue-600 border border-transparent font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Explore Digital Marketing Course
        </button>
        <button
          onClick={onClose}
          className="mt-2 w-full text-center text-red-500 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
}
