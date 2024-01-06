import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import SkillCard from './SkillCard'; 
import ProjectCard from './ProjectCard';
import Footer from "./Footer";



function Home() {



return (
    <div className="h-full grid grid-flow-row">
      <div className="h-screen items-center mt-[100px]">
    <div className="sm:flex justify-center  ">
        <img src="./images/profil.jpg" alt="Profil" className="sm:w-80 rounded-full flex justify-center"  />
        <div className="w-auto mt-[100px] ml-2">
        <p className="text-center text-primary ">Hello, im</p>
        <h1 className="text-center text-2xl font-bold">Muhammad Baldi Maulana</h1>
        <h1 className="text-center text-2xl font-bold text-primary hover:text-black">FrontEnd Developer</h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-lg">
        <a
  href="/path/to/my_cv.pdf"
  download="my_cv.pdf"
>
  <button className="bg-white border-4 rounded-full border-black p-2 hover:bg-black hover:text-white dark:text-black dark:hover:text-white">
    Download CV
  </button>
</a>
        <button
  className="bg-black border-4 rounded-full border-black text-white p-2 hover:bg-white hover:text-black"
  onClick={() => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Contact Info
</button>
        </div>
        <div className="mt-2 gap-4 flex justify-center rounded ">
        <a href="https://github.com/BaldiMaulana" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-baldi-maulana-099a5328a/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size ="2x" />
        </a>
        </div>
        </div>
    </div>
      </div>

    <div className="h-screen w-full">
        <div className="flex justify-center">
        <h1>Get To Know Me</h1>
        </div>
        <div className="flex justify-center">
        <h1 className="text-5xl font-bold ">About Me</h1>
        </div>

        <div className=" sm:flex mt-[90px] justify-center items-start gap-5">
        <img src="./images/profil2.jpg" alt="profil2" className="sm:flex ml-10 object-contain h-[300px] w-auto grayscale rounded-xl -z-10 " />
        <div className="sm:flex grid">
        <div className="sm:grid w-[300px] mt-5">
        <p className="sm:w-[400px] text-justify capitalize ml-10">I have been learning programming since the end of 2022, and I'm still learning. I started my journey by watching YouTube tutorials and reading articles. I got introduced to Front-End Development and began with the fundamentals like HTML, CSS, and JavaScript. I also learned about frameworks like Bootstrap and Tailwind, as well as libraries like React.js. Additionally, I joined developer communities to accelerate my learning and development.
I believe that joining these communities is beneficial, but I also recognize that it's not enough. To further enhance my skills, I aim to transition into the industry. </p>
        <div className="mt-auto ml-10">
        <p>If you want to know more about me, Click the button bellow :</p>
        <button className="mt-1 rounded-xl text-white bg-black p-4  hover:bg-primary hover:text-white dark:bg-white dark:text-black">
            <Link to="/about">About Me</Link>
            </button>
        </div>
        </div>
        </div>
</div>
</div>

<div className="`bg-white  flex items-center justify-center dark:text-black">
      <div className="border-4 p-10 rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>
        <div className="grid grid-cols-3 gap-2 text-center">
          <SkillCard title="HTML" level="Experienced" />
          <SkillCard title="CSS" level="Experienced" />
          <SkillCard title="JavaScript" level="Basic" />
          <SkillCard title="React Js" level="Basic" />
          <SkillCard title="Tailwind CSS" level="Experienced" />
          <SkillCard title="Github" level="Basic" />
        </div>
      </div>
    </div>
    
    <div className="h-full mt-[50px] w-full">
        <div className="flex justify-center">
        <h1>Browse My Recent</h1>
        </div>
        <div className="flex justify-center">
        <h1 className="text-5xl font-bold">Projects</h1>
        </div>
        <div className="sm:grid-cols-3 grid-cols-1	grid gap-4 ">
          <ProjectCard title="To Do List" 
          description="This Project Uses HTML,CSS and Javascript"
          imageUrl="https://github.com/BaldiMaulana/to-dolist/blob/master/thum.png?raw=true"
          websiteUrl="https://baldimaulana.github.io/to-dolist/"/>
          <ProjectCard title="Portofolio React Js" 
          description="This project uses React js and Tailwind CSS. From this project,i am can learn a lot"
          imageUrl="https://github.com/BaldiMaulana/react-bama/blob/master/ttum.png?raw=true"
          websiteUrl="https://react-bama.vercel.app/"
          />
          <ProjectCard title="Calculator" 
          description="This Project Uses HTML,CSS and Javascript"
          imageUrl="https://github.com/BaldiMaulana/calcutator/blob/master/tum.png?raw=true"
          websiteUrl="https://baldimaulana.github.io/calcutator/"
          />
          <ProjectCard title="Password Generator" 
          description="This Project Uses HTML,CSS and Javascript"
          imageUrl="https://github.com/BaldiMaulana/PasswordGenerate/blob/master/tumm.png?raw=true"
          websiteUrl="https://baldimaulana.github.io/PasswordGenerate/"
          />
          <ProjectCard title="First Client Law Firm" 
          description="This my first client project"
          imageUrl="https://github.com/BaldiMaulana/equitylawfirm/blob/master/ss.png?raw=true"
          websiteUrl="https://equitylawfirm.vercel.app/"
          />
        </div>
        </div>   


        
        <div className="h-full mt-[50px] w-full">
        <div className="flex justify-center">
        <h1>Get in Touch</h1>
        </div>
        <div className="flex justify-center">
        <h1 className="text-5xl font-bold" id="contact">Contact Me</h1>
        </div>
        <div className=" flex justify-center items-center mt-20">
          <div className="border-4 p-5 rounded-2xl justify-between flex ">
          <a className="">
          <FontAwesomeIcon icon={faEnvelope} size ="2x"/>  m.baldimaulana.gmail.com</a>
          <a href="https://www.linkedin.com/in/muhammad-baldi-maulana-099a5328a/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size ="2x" className="pl-2" />  Linkedin
        </a>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
    
);
}



export default Home;
