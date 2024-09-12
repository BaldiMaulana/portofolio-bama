import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () =>{
    return(
        <div className="h-full">
            <div className="flex justify-center">
            <h1>Browse My Recent</h1>
            </div>
            <div className="flex justify-center m-2">
            <h1 className="text-5xl font-bold">Projects</h1>
            </div>
            <div className="sm:grid-cols-3 grid-cols-1	grid gap-4 ">
            <ProjectCard 
            title="To Do List" 
            description="This Project Uses HTML,CSS and Javascript"
            imageUrl="https://github.com/BaldiMaulana/to-dolist/blob/master/newthum.png?raw=true"
            websiteUrl="https://baldimaulana.github.io/to-dolist/"/>
            <ProjectCard 
            title="Portofolio React Js" 
            description="This project uses React js and Tailwind CSS. From this project,i am can learn a lot"
            imageUrl='https://github.com/BaldiMaulana/react-bama/blob/master/public/images/thum.png?raw=true'
            websiteUrl="https://react-bama.vercel.app/"
            />
            <ProjectCard 
            title="Calculator" 
            description="This Project Uses HTML,CSS and Javascript"
            imageUrl="https://github.com/BaldiMaulana/calcutator/blob/master/tum.png?raw=true"
            websiteUrl="https://baldimaulana.github.io/calcutator/"
            />
            <ProjectCard 
            title="First Client Law Firm" 
            description="This my first client project"
            imageUrl="https://github.com/BaldiMaulana/equitylawfirm/blob/master/ss.png?raw=true"
            websiteUrl="https://equitylawfirm.vercel.app/"
            />
            <ProjectCard 
            title="Weather App"
            description="This project use API and React JS"
            imageUrl='https://github.com/BaldiMaulana/weatherbama/blob/master/weather-app.png?raw=true'
            websiteUrl='https://weatherbama.vercel.app/'
            />
            <ProjectCard 
            title="Gym Website"
            description="Gym Website"
            imageUrl='https://github.com/BaldiMaulana/gym/blob/master/public/images/gym.jpg?raw=true'
            websiteUrl='https://gym-harapan.vercel.app/'
            />
            </div>
            <div className="mt-20 text-center">
                powered by @bama
            </div>
        </div>
    )
}
export default Project;