import React from "react";

import Project from "./Project";
import Footer from "./Footer";
import Profile from "./Profil/Profile";
import About from "./Profil/About";
import Contact from "./Profil/Contact";
import Skill from "./Skill";

function Home() {

return (
    <div>
      <Profile/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
);
}



export default Home;
