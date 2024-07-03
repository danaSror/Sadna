import { AiFillLinkedin } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import { useContext } from "react";
import { DarkContext } from "@/context/context";


function Contact() {
    const { darkMode, setDarkMode } = useContext(DarkContext);
    
  return (
        <div className={!darkMode ? "dark" : ""} id="contact">
        <main className="bg-white px-10 h-36 text-center  dark:bg-gray-800 dark:text-white flex flex-col justify-center">
          <div>
            <h1 className="animate-pulse sm:text-2xl  py-2 text-pink-700 lg:text-3xl mobile:text-lg dark:text-red-100">Let`s keep in touch and collaborate together.</h1>
          </div>
          
          <div className="text-7xl py-5 mobile:text-2xl sm:text-5xl text-pink-700 flex justify-center gap-8 dark:text-white">
                <a
            href="https://www.linkedin.com/in/dana-sror/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/danaSror"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <AiFillGithub />
          </a>
          <a
            href="mailto:dana.sror123@gmail.com"
            className="cursor-pointer"
          >
            <BiLogoGmail />
          </a>
          <a
            href="https://wa.me/972522494184"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <BsWhatsapp />
          </a>
                </div>
            </main>
      </div>
    );
}

export default Contact;