import React from "react"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Profile = () =>{

  const handleClick = () =>{
    alert("untuk saat ini tidak dapat mendownload CV Saya Maaf!!!")
  }

    return(
        <div className="h-full grid grid-flow-row">
      <div className="h-screen items-center mt-[100px]">
    <div className="sm:flex justify-center  ">
        <img src="./images/profil.jpg" alt="Profil" className="sm:w-80 rounded-full flex justify-center dark:border-white dark:border-4"  />
        <div className="w-auto mt-[100px] ml-2">
        <p className="text-center text-primary ">Hello, im</p>
        <h1 className="text-center text-2xl font-bold">Muhammad Baldi Maulana</h1>
        <h1 className="text-center text-2xl font-bold text-primary hover:text-black">FrontEnd Developer</h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-lg">
        {/* <a
  href="/path/to/my_cv.pdf"
  download="my_cv.pdf"
> */}
  <button
  onClick={handleClick}
  className="bg-white border-4 rounded-full border-black p-2 hover:bg-black hover:text-white dark:text-black dark:hover:text-white">
    Download CV
  </button>
{/* </a> */}
        <button
  className="bg-black border-4 rounded-full border-black text-white p-2 hover:bg-white hover:text-black dark:border-white"
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
    </div>

    )
}

export default Profile