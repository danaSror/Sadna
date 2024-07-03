import Image from "next/image";
import pic from "../../public/black.gif";
import { useContext } from "react";
import { DarkContext } from "@/context/context";

function About() {
  const { darkMode, setDarkMode } = useContext(DarkContext);

  return (
    <div className={!darkMode ? "dark" : ""} id="home">
      <main className="h-screen bg-white px-10 mobile:px-2 text-center  dark:bg-gray-800">
        <div className="flex  items-center justify-center h-screen ">
          <section className="flex flex-col gap-10 md:gap-3 sm:gap-3 mobile:gap-4 md:flex-row px-10 lg:mt-64 md:mt-48 sm:mt-64 mobile:mt-28 sm:px-2 mobile:px-2  ">
          <h2 className="lg:text-6xl py-2 text-pink-700 font-medium max-w-xl md:text-4xl sm:text-3xl mobile:text-3xl">
              סדנה
              <br></br>
              <h3>הרב ניר שלמה אוחיון</h3>
              </h2>

            
          </section>
        </div>
      </main>
      </div>
  );
}

export default About;
