import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-white p-10 rounded-3xl flex flex-col md:flex-row items-center shadow mb-6 mt-2 bg-gradient-to-b from-pink-200 to-blue-300">
      <div className="flex-1 text-center md:text-left">
         <h1 className="text-2xl md:text-3xl font-bold text--700 mb-4"> 
          Welcome to the learning Dashboard,{" "}
          <span className = "text-black">
            <ReactTyped strings={["Skill On Time"]} typeSpeed={80} backSpeed={50} loop />
          </span>
        </h1>
        <p className="mb-2 text-lg">
          A learning platform for you to upgrade your skills
        </p>
          <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            onClick={() => {
              window.open('https://skillontime.com/about-us', '_blank');
            }}
          >
            Learn more about us
          </button>
      </div>
      <img
        src="/check.png"
        alt="Online Course"
        className="w-full md:w-48 h-48 rounded-lg object-cover shadow mt-6 md:mt-0"
      />
    </div>
  );
}