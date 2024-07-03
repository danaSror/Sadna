import React from "react";
import Card from "./Card";
import { useContext, useState, useEffect } from "react";
import { DarkContext } from "@/context/context";
import { useInView } from "react-intersection-observer";

function Lessons() {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
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

  const lessons = [
    {
      name: "הרצאה א",
      description: "הסבר על אוטומט",
    },
    {
      name: "הרצאה ב",
      description: " פנס הקסם ",
    },
  ];

  return (
    <div className={!darkMode ? "dark" : ""} id="portfolio">
      <ul role="list" className="divide-y divide-black-100">
        {lessons.map((lesson) => (
          <li key={lesson.name} className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {lesson.name}
              </p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {lesson.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lessons;
