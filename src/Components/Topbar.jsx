import React, { Suspense, lazy } from 'react';
import { IoMdClose } from 'react-icons/io';
import { HiMenu } from 'react-icons/hi';

// const StudyBar = lazy(() => import('./Study_bar'));
const UserProfile = lazy(() => import('./UserProfile'));

export default function Topbar({ isOpen, handleButton }) {
  return (
    <div
      id="topbar"
      className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center justify-between z-50 px-4 md:px-6 lg:px-8"
    >
      {/* Menu Button for Medium Screens and Below */}
      <div id="menu-button" className="flex justify-start md:hidden">
        <button
          onClick={handleButton}
          className="text-gray-600 hover:text-gray-900"
        >
          {isOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      
      {/* Logo Container */}
      <div id="logo-container" className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="Logo"
          width={120}
          height={60}
          className="object-contain"
        />
        {/* Study Bar only for medium screens and above */}
        <div id="study-bar" className="hidden md:block">
          <Suspense fallback={<div>Loading Study Bar...</div>}>
            {/* <StudyBar /> */}
          </Suspense>
        </div>
      </div>
      
      {/* User Profile */}
      <div id="user-profile" className="flex items-center justify-center gap-4">
        <Suspense fallback={<div>Loading Profile...</div>}>
          <UserProfile />
        </Suspense>
      </div>
    </div>
  );
}
