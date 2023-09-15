import React from "react";
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className="h-full">
        <div className='flex justify-center mt-[50px]'>
      <ul className='flex gap-4 m-3 text-2xl'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
      <h1 className="text-center  flex justify-center mt-[30px]">Copyright © 2023 Muhammad Baldi Maulana.All Rights Reserved.</h1>
        </div>
    )
}

export default Footer;