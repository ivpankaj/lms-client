import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { options } from '../services/data/sidebar_options';
import { medias } from '../services/data/social_media_icons';

export default function Sidebar({ isOpen, handleClose }) {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-white flex flex-col h-full shadow-2xl fixed top-0 left-0 z-40 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-3xl`}
    >
      <ul className="flex-grow mt-16 h-full w-full overflow-y-auto">
        {options.map((option, index) => (
          <li
            key={index}
            className="flex items-center gap-4 mt-3 hover:bg-gray-200 hover:text-black rounded-xl w-full transition-colors"
            onClick={() => {
              navigate(option.value);
              handleClose();
            }}
          >
            <button className="p-3 flex items-center w-full text-left">
              <option.icon className="mr-2 text-gray-600" />
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="bg-gray-200 p-4 text-center">
        <h1 className="text-gray-700 text-lg font-semibold mb-2">Follow us on social media</h1>
        <div className="flex justify-center flex-wrap gap-4">
          {medias.map((media, index) => {
            const Icon = media.icon;
            return (
              <a href={media.link} key={index} target="_blank" rel="noopener noreferrer">
                <Icon
                  className={`text-2xl ${media.color} hover:opacity-70 transition-opacity`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
