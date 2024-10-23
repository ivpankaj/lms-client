import React, { useState, useRef, useEffect } from 'react';
import Layout from '../Components/Layout';
import {dm_advanced_semesterData} from './MyCoursesSemesterData2'

const statusColors = {
  'Completed': 'text-green-600 bg-green-100',
  'Ongoing': 'text-yellow-600 bg-yellow-100',
  'Pending': 'text-red-600 bg-red-100',
};

const DigitalMarketingAdv = () => {
  const [currentSemester, setCurrentSemester] = useState(1);
  const [modules, setModules] = useState(dm_advanced_semesterData[currentSemester]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [activeSubtopic, setActiveSubtopic] = useState(null);
  const [activeInnerSubtopic, setActiveInnerSubtopic] = useState(null);
  const [innerSubtopicIndex, setInnerSubtopicIndex] = useState(null);
  const [showSubTopic, setShowSubTopic] = useState(false);

  // Refs for inner subtopics
  const innerSubtopicRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    setModules(dm_advanced_semesterData[currentSemester]); // Replace this with API call if needed
  }, [currentSemester]);

  useEffect(() => {
    // Setup ResizeObserver for inner subtopic elements
    observerRef.current = new ResizeObserver(() => {
      if (activeInnerSubtopic !== null) {
        const el = innerSubtopicRefs.current[innerSubtopicIndex];
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }
    });

    // Observe each inner subtopic
    innerSubtopicRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current.observe(ref);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      if (observerRef.current) {
        innerSubtopicRefs.current.forEach((ref) => {
          if (ref) {
            observerRef.current.unobserve(ref);
          }
        });
      }
    };
  }, [activeInnerSubtopic, innerSubtopicIndex]);

  const handleNext = () => {
    if (currentSemester < Object.keys(dm_advanced_semesterData).length) setCurrentSemester(currentSemester + 1);
  };

  const handlePrevious = () => {
    if (currentSemester > 1) setCurrentSemester(currentSemester - 1);
  };

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setActiveTab('description'); // Reset to description tab when selecting a new module
    setActiveSubtopic(null); // Reset subtopic view
    setActiveInnerSubtopic(null); // Reset inner subtopic view
  };

  const handleSubtopicClick = (subtopic) => {
    console.log('this is testing console');
    setActiveSubtopic(subtopic);
    setActiveInnerSubtopic(null); // Reset inner subtopic view when changing main subtopics
  };

  const handleInnerSubtopicClick = (innersubtopic, index) => {
    setActiveInnerSubtopic(innersubtopic);
    setInnerSubtopicIndex(index); // Set index to scroll to the correct inner subtopic
  };

  // Function to render nested inner subtopics
  const renderInnerSubtopics = (innersubtopics) => {
    return innersubtopics.map((innersubtopic, index) => (
      <div
        key={index}
        ref={(el) => (innerSubtopicRefs.current[index] = el)}
        className="my-4 w-full"
      >
        <div
          className={`p-4 cursor-pointer rounded-lg ${activeInnerSubtopic === innersubtopic ? 'bg-blue-50 border border-blue-300' : 'bg-gray-100'} hover:bg-blue-100 hover:border-blue-300`}
          onClick={() => {
            handleInnerSubtopicClick(innersubtopic, index);
            setActiveTab('subtopic');
            setShowSubTopic(showSubTopic && innerSubtopicIndex === index ? !showSubTopic : true);
          }}
        >
          <h4 className="text-lg font-semibold mt-5">{innersubtopic.title}</h4>
          {innerSubtopicIndex === index && showSubTopic && (
            <div className="text-gray-700 mt-2">
              <p>{innersubtopic.content}</p>
              <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Code Example</h4>
                <pre className="whitespace-pre-wrap">
                  <code>{innersubtopic.example}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    ));
  };

  // Function to render subtopics
  const renderSubtopics = (subtopics) => {
    return subtopics.map((subtopic, index) => (
      <div key={index} className="mb-4">
        <div
          className={`p-4 cursor-pointer rounded-lg ${activeSubtopic === subtopic ? 'bg-blue-50 border border-blue-300' : 'bg-gray-100'} hover:bg-blue-100 hover:border-blue-300`}
          onClick={() => handleSubtopicClick(subtopic)}
        >
          <h4 className="text-lg font-semibold">{subtopic.title}</h4>
          {activeSubtopic === subtopic && (
            <div className="text-gray-700 mt-2">
              <p>{subtopic.content}</p>
              {subtopic.innersubtopics && renderInnerSubtopics(subtopic.innersubtopics)}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <Layout>
      <div className="w-screen max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-lg overflow-x-auto">

        {/* Semester Tabs */}
        <div className="overflow-x-auto mb-6">
          <div className="flex flex-nowrap space-x-2 overflow-x-auto">
            {Object.keys(dm_advanced_semesterData).map((sem) => (
              <button
                key={sem}
                className={`font-semibold px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base ${
                  parseInt(sem) === currentSemester
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
                onClick={() => {
                  setCurrentSemester(parseInt(sem));
                  setSelectedModule(null);
                }}
              >
                Semester {sem.padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>

        {/* Module List Table */}
        <div className="overflow-x-auto mb-6">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-gray-700">
                <th className="py-2 text-xs sm:text-sm md:text-base">Module</th>
                <th className="py-2 text-xs sm:text-sm md:text-base">Unit</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {modules.map((module) => (
                <tr
                  key={module.id}
                  className="border-b cursor-pointer hover:bg-gray-100"
                  onClick={() => handleModuleClick(module)}
                >
                  <td className="flex items-center py-4 pl-4 text-xs sm:text-sm md:text-base">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={module.status === 'Completed'}
                      readOnly
                    />
                    {module.name}
                  </td>
                  <td className="py-4 text-xs sm:text-sm md:text-base">{module.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Module Details */}
        {selectedModule && (
          <div className="p-4 bg-white rounded-lg shadow-lg mt-6">
            <h3 className="text-xl font-semibold mb-2">{selectedModule.name}</h3>
            <p className="text-gray-700 mb-2"><strong>Unit:</strong> {selectedModule.unit}</p>
            <p className="text-gray-700 mb-2"><strong>Status:</strong> <span className={`px-2 py-1 rounded-full ${statusColors[selectedModule.status]} text-xs sm:text-sm md:text-base`}>{selectedModule.status}</span></p>

            {/* Tabs for Description and Subtopics */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <button
                className={`flex-1 px-4 py-2 rounded-lg text-xs sm:text-sm md:text-base ${activeTab === 'description' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                onClick={() => {
                  setActiveTab('description');
                  setActiveSubtopic(null); // Hide subtopic details
                  setActiveInnerSubtopic(null); // Hide inner subtopic details
                }}
              >
                Overview
              </button>
            </div>

            {activeTab === 'description' && (
              <>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Overview</h4>
                  <p className="text-gray-700">{selectedModule.description.overview}</p>
                </div>
                {renderSubtopics(selectedModule.description.subtopics)}
              </>
            )}

            {activeTab === 'subtopic' && activeSubtopic && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">{activeSubtopic.title}</h4>
                <p className="text-gray-700">{activeSubtopic.content}</p>
                {activeSubtopic.innersubtopics && renderInnerSubtopics(activeSubtopic.innersubtopics)}
              </div>
            )}

            {/* Additional Notes */}
            {selectedModule.additionalNotes && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Additional Notes</h4>
                <p className="text-gray-700">{selectedModule.additionalNotes}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-2 sm:space-y-0">
          <button
            className={`px-4 py-2 rounded-lg flex-1 sm:flex-initial text-xs sm:text-sm md:text-base ${
              currentSemester === 1
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 text-white'
            }`}
            onClick={handlePrevious}
            disabled={currentSemester === 1}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex-1 sm:flex-initial text-xs sm:text-sm md:text-base ${
              currentSemester === Object.keys(dm_advanced_semesterData).length
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 text-white'
            }`}
            disabled={currentSemester === Object.keys(dm_advanced_semesterData).length}
            onClick={() => {
              setCurrentSemester(null);
              setSelectedModule(null);
              handleNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DigitalMarketingAdv;