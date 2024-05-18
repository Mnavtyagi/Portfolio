import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/manav.avif"

function Home() {
  return (
    <>
        <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-32">
            <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
        <span className="text-2xl">Welcome to my Space </span>
      <div className="flex space-x-1 text-3xl md:text-4xl">  <h1>Hello, I'm a </h1>

       { /* <span className="text-purple-600 font-bold">Developer</span> */}
       <ReactTyped
       className="text-purple-800 font-bold text-4xl"
       strings={[" Developer", " Programmer", " Coder"]}
       typeSpeed={50}
       backSpeed={40}
       loop={true}
        />

        </div>
        <br />
        
        <p className="text-sm md:text-md text-justify text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent ">"As a fervent software enthusiast and full-stack web developer, I'm driven by a deep passion for crafting transformative digital experiences. With each project, I'm committed to innovation, excellence, and pushing boundaries."</p>
        <br/>
        {/*Social Media Icons */}
       <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="space-y-2 my-24">
            <h1 className="font-bold ">Available On</h1>
           <ul className="flex space-x-5">
            <li>
              <a href="https://twitter.com/Manav_tyagii"
              target="_blank" >
              <FaXTwitter className="text-2xl cursor-pointer hover:scale-150 duration-200" />   </a> </li>
            <li><a href="https://www.linkedin.com/in/manav-tyagi-750072200/"
              target="_blank" >
            <FaLinkedin className="text-2xl cursor-pointer hover:scale-150 duration-200"/></a></li>
            <li><a href="https://mail.google.com"
              target="_blank" ><IoIosMail className="text-2xl cursor-pointer hover:scale-150 duration-200"/></a></li>
            <li><a href="https://web.telegram.org/a/"
              target="_blank" ><FaTelegram className="text-2xl cursor-pointer hover:scale-150 duration-200"/></a></li>
            
           </ul>
        </div>
        <div className=" space-y-2">  
     <h1 className="font-bold ">Currently Working On</h1>
           <div className="flex space-x-5">
            <SiMongodb className= "text-3xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[px]" />
            <SiExpress className= "text-3xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2px]" />
            <FaReact className= "text-3xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2px]"/>
            <FaNodeJs className= "text-3xl md:text-3xl hover:scale-150 duration-200 rounded-full border-[2px]"/>
           </div> 
        </div>
        </div>
        </div>

        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
            <img src={pic} className="rounded-full md:w-[500px] md:h-[500] hover:scale-150 duration-500" alt="" />
        </div>
        </div>
        </div>
        <br/> <hr/>
    </>
  );
}

export default Home;