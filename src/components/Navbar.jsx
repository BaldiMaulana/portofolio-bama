import './nav.css';
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';





function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const swapMode = () => {
    setDarkMode(!darkMode);

    const body = document.body;
    body.classList.toggle('dark');
  }

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <nav className={`bg-white sm:flex sm:items-center sm:justify-between p-4 sticky top-0 z-40 ${darkMode ? 'dark' : ''}`}>
        <h1 className="ml-4 text-4xl font-semibold sm:justify-center ">BAMA</h1>
      <div className="w-full sm:w-auto flex items-center justify-center">
          <ul className="sm:flex sm:gap-4 m-3 text-2xl hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <div className={darkMode ? 'dark' : ''}>
      <button
        className=" hover:bg-gray-950 hover:text-white  p-1/2 rounded hover:dark:bg-white dark:text-white hover:dark:text-black"
        onClick={swapMode}
      >
        {darkMode ? 'Light Mode' : ' Dark Mode'}
      </button>
    </div>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
