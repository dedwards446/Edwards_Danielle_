// Import necessary dependencies from React and React Router
import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Import DeviceSizeContext for managing device size and theme
import DeviceSizeContext from '../../functions/DeviceSizeContext';

// Import icons for the theme toggle button
import { MoonIcon, SunIcon } from '../../static/icons';

// Define an array of page links with their names and corresponding routes
export const PageLinks = [
  { name: "Home", link: "/" },
  { name: "Getting Started", link: "/chakra" },
  { name: "About", link: "/about" },
];

// Define CSS classes for navigation links when hovered and when active
const cssNavHover = `block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`;
const cssNavActive = `block py-2 pr-4 pl-3 text-white bg-orange-300 dark:bg-slate-900 rounded dark:md:bg-transparent md:bg-transparent md:text-orange-300 md:p-0 dark:text-white`;

// Functional component for navigation bar
export default function Nav() {
  
  // Access location and context variables from DeviceSizeContext
  const location = useLocation();
  const [{ isMenuOpen, darkTheme }, dispatch] = useContext(DeviceSizeContext);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    dispatch({ type: `TOGGLE_MENU` });
  }

  // Function to toggle between light and dark themes
  const changeTheme = () => {
    dispatch({ type: `CHANGE_THEME` });
  }

  return (
    // Navigation bar container
    <nav className="bg-white border-gray-200 p-4 sm:px-4 py-4 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        
        {/* Brand/logo section */}
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Chakra-App
          </span>
        </Link>
        
        {/* Mobile menu toggle button */}
        <div className='block md:hidden'>
          <button
            data-collapse-toggle="mobile-menu" type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu} >
            
            <span className="sr-only">Open main menu</span>
            {/* Conditional rendering of menu open/close icons */}
            {!isMenuOpen && <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> ... </svg>}
            {isMenuOpen && <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> ... </svg>}
          
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`${(isMenuOpen) ? '' : 'hidden'} w-full md:w-auto md:block md:w-auto`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {/* Render page links */}
            {PageLinks.map((page, index) => {
              return (
                <li key={index}>
                  <Link to={page.link}
                    className={(location.pathname === page.link) ? cssNavActive : cssNavHover}
                  > {page.name}
                  </Link>
                </li>
              );
            })}
            {/* Theme toggle button */}
            <li>
              <button className='py-4 pl-4 md:p-0 focus-visible:outline-none' onClick={changeTheme}>
                {/* Conditional rendering of moon/sun icon based on theme */}
                {darkTheme ? <MoonIcon /> : <SunIcon />}
              </button>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
}
