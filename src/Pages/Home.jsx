import React, { useState } from 'react';

import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';
import MainContent from '../Components/MainContent';

export default function Home({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => setIsOpen(!isOpen);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex h-screen w-screen">
        <div fallback={<div>Loading Sidebar...</div>}>
          <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)} />
        </div>
        <div
          id="content-container"
          className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
            isOpen ? 'ml-[var(--sidebar-width)]' : 'ml-0'
          }`}
        >
          <div fallback={<div>Loading Topbar...</div>}>
            <Topbar isOpen={isOpen} handleButton={handleButton} />
          </div>
          <div fallback={<div>Loading Content...</div>}>
            <MainContent>{children}</MainContent>
          </div>
        </div>
      </div>
    </div>
  );
}
