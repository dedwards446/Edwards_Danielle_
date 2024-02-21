import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = [
    { name: "About", link: "/about", style:"mr-4 md:mr-6" },
];

function Footer() {
  return (
    <>
    <footer className="px-4 pt-4 pb-12 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">

        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chakra App</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                { FooterLinks.map((path, index) => {
                    return <li key={index}>
                        <Link to={path.link} className={`hover:underline ${path.style}`}>{path.name}</Link>
                    </li>
                }) }
            </ul>
        </div>

        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />

        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 
                <Link to="/" className="hover:underline">{` Chakra App`}</Link>. 
                All Rights Reserved.
            </span>
        </div>

    </footer>
    </>
  )
}

export default Footer;