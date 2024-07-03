import React from "react";
import Card from "./Card";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "@/context/context";
import { useInView } from "react-intersection-observer";


function Portfolio() {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json'); 
      const data = await response.json();
      setCards(data);
    };

    fetchData();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Use the useInView hook to detect when the header is in the viewport
  const [h1Ref, h1InView] = useInView({
    triggerOnce: false, // Only trigger once when it enters the viewport
    threshold: 0.1, // 10% of the component is visible
  });

  const [h2Ref, h2InView] = useInView({
    triggerOnce: false, // Only trigger once when it enters the viewport
    threshold: 0.1, // 10% of the component is visible
  });

  return (
    <div className={!darkMode ? "dark" : ""} id="portfolio">
      <div className="bg-white dark:bg-gray-800 text-center py-20  ">
        <h1
          ref={h1Ref}
          className={`text-5xl mobile:text-3xl text-left px-20 mobile:px-4 text-pink-700 font-medium md:text-6xl sm:text-3xl sm:mt-10 mobile:mt-3 ${
            h1InView ? "animate-fadeUpIn-h1" : ""
          }`}
        >
          Portfolio
        </h1>

        <h2
          ref={h2Ref}
          className={`mt-5 sm:mt-1 text-xl mobile:text-base text-left px-20 mobile:px-4 text-zinc-600 dark:text-slate-200 font-medium sm:text-lg ${
            h2InView ? "animate-fadeUpIn-h2" : ""
          }`}
        >
          Discover my diverse portfolio, showcasing BackEnd development and
          Fronted development.
          <br /> Explore my creative journey and reach out for collaborations.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mobile:grid-cols-1 gap-10 py-10 px-20 mobile:px-4 mobile:py-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              images={card.images}
              usedTools={card.usedTools}
              sourceCode={card.sourceCode}
            />
          ))}
        </div>
      </div>
      </div>
  );
}

export default Portfolio;
