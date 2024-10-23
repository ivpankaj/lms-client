// import React, { useState, useRef, useEffect } from 'react';
// import Layout from '../Components/Layout';
// import { topics } from './InterviewData';

// const Interview = () => {
//   const [activeTopic, setActiveTopic] = useState(null);
//   const [activeLevel, setActiveLevel] = useState('');
//   const [activeSubtopic, setActiveSubtopic] = useState(null);

//   // Refs for topics and subtopics based on level and index
//   const refs = useRef({});

//   useEffect(() => {
//     // Scroll to the active topic if any
//     if (activeTopic !== null && refs.current[activeLevel] && refs.current[activeLevel].topics[activeTopic]) {
//       refs.current[activeLevel].topics[activeTopic].scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, [activeTopic, activeLevel]);

//   useEffect(() => {
//     // Scroll to the active subtopic if any
//     if (activeSubtopic !== null && refs.current[activeLevel] && refs.current[activeLevel].subtopics[activeSubtopic]) {
//       refs.current[activeLevel].subtopics[activeSubtopic].scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, [activeSubtopic, activeLevel]);

//   const handleTopicClick = (index, level) => {
//     setActiveTopic(activeTopic === index && activeLevel === level ? null : index);
//     setActiveSubtopic(null); // Reset subtopic when changing topics
//     setActiveLevel(level);
//   };

//   const handleSubtopicClick = (subIndex) => {
//     setActiveSubtopic(activeSubtopic === subIndex ? null : subIndex);
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-white text-black p-6">
//         <h1 className="text-4xl font-bold mb-6 text-center">Interview Preparation Topics</h1>

//         <div className="container mx-auto">
//           {Object.keys(topics).map((level) => (
//             <div key={level} className="mb-12">
//               <h2 className="text-2xl font-semibold mb-2">{capitalizeFirstLetter(level)}</h2>
//               <div className="space-y-6">
//                 {topics[level].map((topic, index) => (
//                   <div
//                     key={index}
//                     ref={(el) => {
//                       if (!refs.current[level]) refs.current[level] = { topics: [], subtopics: [] };
//                       refs.current[level].topics[index] = el; // Assign ref to each topic
//                     }}
//                     className="border border-gray-300 bg-white p-4 rounded-lg shadow-md"
//                   >
//                     <div
//                       className={`cursor-pointer rounded-lg p-2 transition-colors ${
//                         activeTopic === index && activeLevel === level
//                           ? 'bg-light-blue-100 text-blue-800'
//                           : 'hover:bg-blue-100'
//                       }`}
//                       onClick={() => handleTopicClick(index, level)}
//                     >
//                       <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
//                       {activeTopic === index && activeLevel === level && (
//                         <div>
//                           <p className="mb-2">{topic.description}</p>
//                           <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
//                             <code className="text-white">{topic.example}</code>
//                           </pre>
//                           <ul className="list-disc list-inside mt-4">
//                             {topic.subtopics.map((subtopic, subIndex) => (
//                               <li
//                                 key={subIndex}
//                                 ref={(el) => {
//                                   refs.current[level].subtopics[subIndex] = el; // Assign ref to each subtopic
//                                 }}
//                                 className="cursor-pointer hover:bg-blue-200 rounded p-2 mb-2"
//                                 onClick={(e) => {
//                                   e.stopPropagation(); // Prevent topic click event
//                                   handleSubtopicClick(subIndex);
//                                 }}
//                               >
//                                 <h4 className="text-xl font-semibold">{subtopic.title}</h4>
//                                 {activeSubtopic === subIndex && (
//                                   <div>
//                                     <p className="mb-2">{subtopic.description}</p>
//                                     <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
//                                       <code className="text-white">{subtopic.example}</code>
//                                     </pre>
//                                   </div>
//                                 )}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// // Utility function to capitalize the first letter of a string
// const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// export default Interview;










// import React, { useState, useRef, useEffect } from 'react';
// import Layout from '../Components/Layout';
// import { topics } from './InterviewData';
// import { ClipboardIcon } from '@heroicons/react/24/outline'; // Use Heroicons or any other icon library

// const Interview = () => {
//   const [activeTopic, setActiveTopic] = useState(null);
//   const [activeLevel, setActiveLevel] = useState('');
//   const [activeSubtopic, setActiveSubtopic] = useState(null);
//   const [copyFeedback, setCopyFeedback] = useState(''); // For copy feedback

//   // Refs for topics and subtopics based on level and index
//   const refs = useRef({});

//   useEffect(() => {
//     // Scroll to the active topic if any
//     if (activeTopic !== null && refs.current[activeLevel] && refs.current[activeLevel].topics[activeTopic]) {
//       refs.current[activeLevel].topics[activeTopic].scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, [activeTopic, activeLevel]);

//   useEffect(() => {
//     // Scroll to the active subtopic if any
//     if (activeSubtopic !== null && refs.current[activeLevel] && refs.current[activeLevel].subtopics[activeSubtopic]) {
//       refs.current[activeLevel].subtopics[activeSubtopic].scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, [activeSubtopic, activeLevel]);

//   const handleTopicClick = (index, level) => {
//     setActiveTopic(activeTopic === index && activeLevel === level ? null : index);
//     setActiveSubtopic(null); // Reset subtopic when changing topics
//     setActiveLevel(level);
//   };

//   const handleSubtopicClick = (subIndex) => {
//     setActiveSubtopic(activeSubtopic === subIndex ? null : subIndex);
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopyFeedback('Copied!'); // Set feedback message
//       setTimeout(() => setCopyFeedback(''), 2000); // Clear feedback message after 2 seconds
//     });
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-white text-black p-6">
//         <h1 className="text-4xl font-bold mb-6 text-center">Interview Preparation Topics</h1>

//         <div className="container mx-auto">
//           {Object.keys(topics).map((level) => (
//             <div key={level} className="mb-12">
//               <h2 className="text-2xl font-semibold mb-2">{capitalizeFirstLetter(level)}</h2>
//               <div className="space-y-6">
//                 {topics[level].map((topic, index) => (
//                   <div
//                     key={index}
//                     ref={(el) => {
//                       if (!refs.current[level]) refs.current[level] = { topics: [], subtopics: [] };
//                       refs.current[level].topics[index] = el; // Assign ref to each topic
//                     }}
//                     className="border border-gray-300 bg-white p-4 rounded-lg shadow-md"
//                   >
//                     <div
//                       className={`cursor-pointer rounded-lg p-2 transition-colors ${
//                         activeTopic === index && activeLevel === level
//                           ? 'bg-light-blue-100 text-blue-800'
//                           : 'hover:bg-blue-100'
//                       }`}
//                       onClick={() => handleTopicClick(index, level)}
//                     >
//                       <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
//                       {activeTopic === index && activeLevel === level && (
//                         <div>
//                           <p className="mb-2">{topic.description}</p>
//                           <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto relative">
//                             <code className="text-white">{topic.example}</code>
//                             <button
//                               className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
//                               onClick={() => copyToClipboard(topic.example)}
//                             >
//                               <ClipboardIcon className="h-6 w-6" />
//                             </button>
//                           </pre>
//                           <ul className="list-disc list-inside mt-4">
//                             {topic.subtopics.map((subtopic, subIndex) => (
//                               <li
//                                 key={subIndex}
//                                 ref={(el) => {
//                                   refs.current[level].subtopics[subIndex] = el; // Assign ref to each subtopic
//                                 }}
//                                 className="cursor-pointer hover:bg-blue-200 rounded p-2 mb-2"
//                                 onClick={(e) => {
//                                   e.stopPropagation(); // Prevent topic click event
//                                   handleSubtopicClick(subIndex);
//                                 }}
//                               >
//                                 <h4 className="text-xl font-semibold">{subtopic.title}</h4>
//                                 {activeSubtopic === subIndex && (
//                                   <div>
//                                     <p className="mb-2">{subtopic.description}</p>
//                                     <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto relative">
//                                       <code className="text-white">{subtopic.example}</code>
//                                       <button
//                                         className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
//                                         onClick={() => copyToClipboard(subtopic.example)}
//                                       >
//                                         <ClipboardIcon className="h-6 w-6" />
//                                       </button>
//                                     </pre>
//                                   </div>
//                                 )}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//           {copyFeedback && (
//             <div className="fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-lg shadow-lg">
//               {copyFeedback}
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// // Utility function to capitalize the first letter of a string
// const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// export default Interview;












// import React, { useState, useRef, useEffect } from 'react';
// import Layout from '../Components/Layout';
// import { topics } from './InterviewData';
// import { ClipboardIcon } from '@heroicons/react/24/outline'; // Use Heroicons or any other icon library

// const Interview = () => {
//   const [activeTopic, setActiveTopic] = useState(null);
//   const [activeLevel, setActiveLevel] = useState('');
//   const [activeSubtopic, setActiveSubtopic] = useState(null);
//   const [feedback, setFeedback] = useState({});

//   // Refs for topics and subtopics based on level and index
//   const refs = useRef({});

//   useEffect(() => {
//     // Scroll to the active topic if any
//     if (activeTopic !== null && refs.current[activeLevel] && refs.current[activeLevel].topics[activeTopic]) {
//       refs.current[activeLevel].topics[activeTopic].scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, [activeTopic, activeLevel]);

//   useEffect(() => {
//     // Scroll to the active subtopic if any
//     if (activeSubtopic !== null && refs.current[activeLevel] && refs.current[activeLevel].subtopics[activeSubtopic]) {
//       refs.current[activeLevel].subtopics[activeSubtopic].scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, [activeSubtopic, activeLevel]);

//   const handleTopicClick = (index, level) => {
//     setActiveTopic(activeTopic === index && activeLevel === level ? null : index);
//     setActiveSubtopic(null); // Reset subtopic when changing topics
//     setActiveLevel(level);
//   };

//   const handleSubtopicClick = (subIndex) => {
//     setActiveSubtopic(activeSubtopic === subIndex ? null : subIndex);
//   };

//   const copyToClipboard = (text, event, topicIndex, level) => {
//     event.stopPropagation(); // Prevent the click event from propagating to parent elements
//     navigator.clipboard.writeText(text).then(() => {
//       setFeedback({ [level]: topicIndex });
//       setTimeout(() => setFeedback({}), 2000); // Clear feedback message after 2 seconds
//     });
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-white text-black p-6">
//         <h1 className="text-4xl font-bold mb-6 text-center">Interview Preparation Topics</h1>

//         <div className="container mx-auto">
//           {Object.keys(topics).map((level) => (
//             <div key={level} className="mb-12">
//               <h2 className="text-2xl font-semibold mb-2">{capitalizeFirstLetter(level)}</h2>
//               <div className="space-y-6">
//                 {topics[level].map((topic, index) => (
//                   <div
//                     key={index}
//                     ref={(el) => {
//                       if (!refs.current[level]) refs.current[level] = { topics: [], subtopics: [] };
//                       refs.current[level].topics[index] = el; // Assign ref to each topic
//                     }}
//                     className="border border-gray-300 bg-white p-4 rounded-lg shadow-md"
//                   >
//                     <div
//                       className={`cursor-pointer rounded-lg p-2 transition-colors ${
//                         activeTopic === index && activeLevel === level
//                           ? 'bg-light-blue-100 text-blue-800'
//                           : 'hover:bg-blue-100'
//                       }`}
//                       onClick={() => handleTopicClick(index, level)}
//                     >
//                       <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
//                       {activeTopic === index && activeLevel === level && (
//                         <div>
//                           <p className="mb-2">{topic.description}</p>
//                           <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto relative">
//                             <code className="text-white">{topic.example}</code>
//                             <button
//                               className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
//                               onClick={(e) => copyToClipboard(topic.example, e, index, level)}
//                             >
//                               <ClipboardIcon className="h-6 w-6" />
//                             </button>
//                             {feedback[level] === index && (
//                               <div className="absolute top-10 right-2 p-2 bg-green-500 text-white rounded">
//                                 Text Copied!
//                               </div>
//                             )}
//                           </pre>
//                           <ul className="list-disc list-inside mt-4">
//                             {topic.subtopics.map((subtopic, subIndex) => (
//                               <li
//                                 key={subIndex}
//                                 ref={(el) => {
//                                   refs.current[level].subtopics[subIndex] = el; // Assign ref to each subtopic
//                                 }}
//                                 className="cursor-pointer hover:bg-blue-200 rounded p-2 mb-2"
//                                 onClick={(e) => {
//                                   e.stopPropagation(); // Prevent topic click event
//                                   handleSubtopicClick(subIndex);
//                                 }}
//                               >
//                                 <h4 className="text-xl font-semibold">{subtopic.title}</h4>
//                                 {activeSubtopic === subIndex && (
//                                   <div>
//                                     <p className="mb-2">{subtopic.description}</p>
//                                     <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto relative">
//                                       <code className="text-white">{subtopic.example}</code>
//                                       <button
//                                         className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
//                                         onClick={(e) => copyToClipboard(subtopic.example, e, subIndex, level)}
//                                       >
//                                         <ClipboardIcon className="h-6 w-6" />
//                                       </button>
//                                       {feedback[level] === subIndex && (
//                                         <div className="absolute top-10 right-2 p-2 bg-green-500 text-white rounded">
//                                           Text Copied!
//                                         </div>
//                                       )}
//                                     </pre>
//                                   </div>
//                                 )}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// // Utility function to capitalize the first letter of a string
// const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// export default Interview;


import React, { useState, useRef, useEffect } from 'react';
import Layout from '../Components/Layout';
import { topics } from './InterviewData';
import { ClipboardIcon } from '@heroicons/react/24/outline'; // Use Heroicons or any other icon library

const Interview = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeLevel, setActiveLevel] = useState('');
  const [activeSubtopic, setActiveSubtopic] = useState(null);
  const [feedback, setFeedback] = useState({});

  // Refs for topics and subtopics based on level and index
  const refs = useRef({});

  useEffect(() => {
    // Scroll to the active topic if any
    if (activeTopic !== null && refs.current[activeLevel] && refs.current[activeLevel].topics[activeTopic]) {
      refs.current[activeLevel].topics[activeTopic].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeTopic, activeLevel]);

  useEffect(() => {
    // Scroll to the active subtopic if any
    if (activeSubtopic !== null && refs.current[activeLevel] && refs.current[activeLevel].subtopics[activeSubtopic]) {
      refs.current[activeLevel].subtopics[activeSubtopic].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSubtopic, activeLevel]);

  const handleTopicClick = (index, level) => {
    setActiveTopic(activeTopic === index && activeLevel === level ? null : index);
    setActiveSubtopic(null); // Reset subtopic when changing topics
    setActiveLevel(level);
  };

  const handleSubtopicClick = (subIndex) => {
    setActiveSubtopic(activeSubtopic === subIndex ? null : subIndex);
  };

  const copyToClipboard = (text, event, topicIndex, level) => {
    event.stopPropagation(); // Prevent the click event from propagating to parent elements
    navigator.clipboard.writeText(text).then(() => {
      setFeedback({ [level]: topicIndex });
      setTimeout(() => setFeedback({}), 2000); // Clear feedback message after 2 seconds
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white text-black p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Interview Preparation Topics</h1>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(topics).map((level) => (
            <div key={level} className="mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{capitalizeFirstLetter(level)}</h2>
              <div className="space-y-4 sm:space-y-6">
                {topics[level].map((topic, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      if (!refs.current[level]) refs.current[level] = { topics: [], subtopics: [] };
                      refs.current[level].topics[index] = el; // Assign ref to each topic
                    }}
                    className="border border-gray-300 bg-white p-4 rounded-lg shadow-md overflow-x-auto"
                  >
                    <div
                      className={`cursor-pointer rounded-lg p-2 transition-colors ${
                        activeTopic === index && activeLevel === level
                          ? 'bg-light-blue-100 text-blue-800'
                          : 'hover:bg-blue-100'
                      }`}
                      onClick={() => handleTopicClick(index, level)}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{topic.title}</h3>
                      {activeTopic === index && activeLevel === level && (
                        <div>
                          <p className="mb-2 text-sm sm:text-base">{topic.description}</p>
                          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto relative">
                            <code className="text-white text-sm sm:text-base">{topic.example}</code>
                            <button
                              className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                              onClick={(e) => copyToClipboard(topic.example, e, index, level)}
                            >
                              <ClipboardIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                            {feedback[level] === index && (
                              <div className="absolute top-10 right-2 p-2 bg-green-500 text-white rounded">
                                Text Copied!
                              </div>
                            )}
                          </pre>
                          <ul className="list-disc list-inside mt-4 text-sm sm:text-base">
                            {topic.subtopics.map((subtopic, subIndex) => (
                              <li
                                key={subIndex}
                                ref={(el) => {
                                  refs.current[level].subtopics[subIndex] = el; // Assign ref to each subtopic
                                }}
                                className="cursor-pointer hover:bg-blue-200 rounded p-2 mb-2"
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent topic click event
                                  handleSubtopicClick(subIndex);
                                }}
                              >
                                <h4 className="text-lg sm:text-xl font-semibold">{subtopic.title}</h4>
                                {activeSubtopic === subIndex && (
                                  <div>
                                    <p className="mb-2 text-xs sm:text-sm">{subtopic.description}</p>
                                    <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto relative">
                                      <code className="text-white text-xs sm:text-sm">{subtopic.example}</code>
                                      <button
                                        className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                                        onClick={(e) => copyToClipboard(subtopic.example, e, subIndex, level)}
                                      >
                                        <ClipboardIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                                      </button>
                                      {feedback[level] === subIndex && (
                                        <div className="absolute top-10 right-2 p-2 bg-green-500 text-white rounded">
                                          Text Copied!
                                        </div>
                                      )}
                                    </pre>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// Utility function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Interview;