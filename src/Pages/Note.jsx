import React, { useState } from 'react';
import NotesPdf from '../Components/NotesPdf';
import NotesData from '../Components/NotesData';
import Layout from "../Components/Layout";

const Notes = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'DATA':
        return <NotesData />;
      case 'PDF':
        return <NotesPdf />;
      default:
        return <NotesData />;
    }
  };


  return (
    <Layout>
      <div className=''>
        <div className='flex items-center justify-center gap-4 p-2'>
          <button className='bg-green-500 p-2 rounded-lg' onClick={() => setActiveComponent('DATA')}>Notes Data</button>
          <button className='bg-blue-500 p-2 rounded-lg' onClick={() => setActiveComponent('PDF')}>Notes PDF</button>
        </div>
        {renderComponent()}
      </div>
    </Layout>
  )
};

export default Notes;