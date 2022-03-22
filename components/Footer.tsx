import React from 'react';

const Footer = () => (
  <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
        {/* <img src="" className="mr-3 h-8" alt="Flowbite Logo" /> */}
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Niceongt
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2022{' '}
      <a href="" className="hover:underline">
        Niceongt
      </a>
      . All Rights Reserved.
    </span>
  </footer>
);

export default Footer;
