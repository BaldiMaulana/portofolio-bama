import React from "react";


const About = () =>{
    return(
        <main className="mt-20 grid grid-flow-row">
        <div className="h-full w-full">
        <div className="flex justify-center">
        <h1>Get To Know Me</h1>
        </div>
        <div className="flex justify-center">
        <h1 className="text-5xl font-bold ">About Me</h1>
        </div>
        <div className="sm:flex justify-center items-center m-4">
            <div className="flex justify-center">
        <img src="./images/profil2.jpg" alt="profil2" className="flex  h-[300px] grayscale rounded-xl -z-10 " />
            </div>
            <div className="">
        <p className="text-justify m-5 sm:w-80">I have been learning programming since the end of 2022, and I'm still learning. I started my journey by watching YouTube tutorials and reading. I got introduced to front-end development and began with the fundamentals like HTML, CSS, and JavaScript. I also learned about frameworks like Tailwind, as well as libraries like React.js. Additionally, I joined developer communities to accelerate my learning and development. I believe that joining these communities is beneficial, but I also recognize that it's not enough. To further enhance my skills, I aim to transition into the industry. </p>
            </div>
        </div>
        </div>
        </main>
    )
}

export default About;