// Import necessary dependencies from React and React Router
import React from 'react';
import { Link } from 'react-router-dom';

// Import chakra data and fade-in animation component
import Data from '../static/chakraData';
import FadeIn from 'react-fade-in';

// Functional component to display chakra data
export default function ChakraData() {
  
  return (
    <>
      {/* Apply fade-in animation to the component */}
      <FadeIn>
        {/* Grid layout to display chakra data */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mx-8 mt-6 gap-2'>
          {/* Map through chakra data and render individual chakra components */}
          {
            Data.map((value, index) => {
              return (
                <div key={index} className='mx-4'>
                  <div className={value.tailwindStyle[3]}>
                    {/* Link to navigate to chakra details */}
                    <Link to={value.path} >
                      {/* Display chakra icon */}
                      <div className='flex justify-center'>
                        <img className="p-8 rounded-t-lg" src={value.petalIcon} alt=""/>
                      </div>
                      {/* Display chakra name and qualities */}
                      <div className="px-5 pb-5 flex flex-col items-center">
                        {/* Chakra name */}
                        <span className={value.tailwindStyle[4]}>{ value.name }</span>
                        {/* Display chakra qualities */}
                        <div className="flex items-center my-3 flex-wrap">
                          {
                            // Map through chakra qualities and render them
                            value.quality.slice(0, 2).map((ele, index) => {
                              return (
                                <span 
                                  key={index} 
                                  className={`text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 ${value.tailwindStyle[5]}`}>
                                  { ele }
                                </span>
                              );
                            })
                          }
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          }
        </div>
      </FadeIn>
    </>
  );
}
