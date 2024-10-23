
import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, src: '/Banner Resize 1.jpg', alt: 'Slide 1' },
  { id: 2, src: '/Banner Resize 2.jpg', alt: 'Slide 2' },
  { id: 3, src: '/Banner Resize 3.jpg', alt: 'Slide 3' },
  { id: 4, src: '/Banner Resize 4.jpg', alt: 'Slide 4' }
];

export default function CoreSol() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Set an interval to automatically change the slide
  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full bg-white rounded-xl overflow-hidden">
      <div className="relative h-56 md:h-80">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{ display: currentSlide === index ? 'block' : 'none' }}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <svg
          className="w-5 h-5 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100"
        onClick={handleNext}
      >
        <svg
          className="w-5 h-5 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
