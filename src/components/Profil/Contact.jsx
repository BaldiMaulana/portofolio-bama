import React from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () =>{
    return(
        <main className="h-full w-full">
        <div className="flex justify-center items-center">
        <h1>Get in Touch</h1>
        </div>
        <div className="flex justify-center items-center">
        <h1 className="text-5xl font-bold" id="contact">Contact Me</h1>
        </div>
        <div className="sm:grid justify-center items-center">
          <div className="gap-4 border-4 rounded-2xl p-2 sm:flex ">
          <a href="mailto:m.baldimaulana@gmail.com" >
          <FontAwesomeIcon icon={faEnvelope} size ="1x"/>  m.baldimaulana@gmail.com</a>
          <a 
          href="https://www.linkedin.com/in/muhammad-baldi-maulana-099a5328a/" 
          target="_blank" 
          rel="noopener noreferrer"
          >
        <FontAwesomeIcon icon={faLinkedin} size ="1x" />  Linkedin
        </a>
          </div>
        </div>
        </main>
    )
}

export default Contact;