// Import necessary dependencies from React and React Router
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Import DeviceSizeContext for managing device size and theme
import DeviceSizeContext from '../../functions/DeviceSizeContext';

// Import icons for the theme toggle button
import { MoonIcon, SunIcon } from '../../static/icons';

// Define CSS styles for navigation links
const cssNavHover = `block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`;

// Functional component for navigation layout
function NavLayout({ children }) {
  
  // Access darkTheme state and dispatch function from DeviceSizeContext
  const [{ darkTheme }, dispatch] = useContext(DeviceSizeContext);

  // Function to toggle between light and dark themes
  const changeTheme = () => {
    dispatch({ type: `CHANGE_THEME` });
  }

  return (
    <>
      {/* Main navigation container */}
      <div className='px-8 py-6'>
        {/* Header section */}
        <div className='font-sans grid justify-center grid-cols-1 md:grid-cols-12 m-8'>
          {/* Application title */}
          <div className='text-4xl grid justify-center md:text-6xl font-semibold col-span-11 text-orange-900 dark:text-slate-300 '>
            Chakra Meditation
          </div>
          {/* Navigation links and theme toggle button */}
          <div className='flex flex-row md:flex-col items-baseline justify-center'>
            {/* Home link */}
            <Link to="/" className={cssNavHover}>Home</Link>
            {/* Theme toggle button */}
            <button className='mt-2 py-4 pl-4 md:p-0' onClick={changeTheme}>
              {/* Render MoonIcon for dark theme and SunIcon for light theme */}
              {darkTheme ? <MoonIcon/> : <SunIcon/>}
            </button>
          </div>
        </div>
        {/* Render children components */}
        { children }
      </div>
    </>
  );
}

// Export the NavLayout component
export default NavLayout;
