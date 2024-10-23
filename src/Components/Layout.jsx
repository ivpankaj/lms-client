import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MainContent from './MainContent';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex h-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isOpen} 
        handleClose={() => setIsOpen(!isOpen)} 

      />
      
      {/* Main Content Wrapper */}
      <div className="flex flex-1 flex-col h-full">
        {/* Topbar */}
        <Topbar 
          isOpen={isOpen} 
          handleButton={handleButton} 
          className="z-20"
        />
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-200 mt-16">
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </div>
  );
}

