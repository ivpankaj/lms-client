import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-600 text-white text-left focus:outline-none font-semibold text-lg"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.subtitle}</span>
            <span>
              {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </span>
          </button>
          {activeIndex === index && (
            <div className="bg-gray-50 p-6">
              <h4 className="text-lg font-bold text-blue-600 mb-4 text-center">
                {/* Add content here if needed */}
              </h4>
              <ul className="space-y-2">
                {item.subTopics.map((subTopic, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center text-gray-800 text-sm font-medium"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {subTopic.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
