import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { XIcon } from "@heroicons/react/outline";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglecolab } from "react-icons/si";
import { DarkContext } from "@/context/context";

function Modal({
  title,
  subtitle,
  description,
  images,
  usedTools,
  sourceCode,
  closeModal ,
}) {
  const { darkMode, setDarkMode } = useContext(DarkContext);
  const [open, setOpen] = useState(true);
  const isVideo =
    images && images.some((src) => src.toLowerCase().endsWith(".mp4"));
  const videoSrc = isVideo ? images.find((src) => src.toLowerCase().endsWith(".mp4")):"";
  const isUrlContainsGit = sourceCode?sourceCode.includes("git"):false;
  const isUrlContainsLink = description?description.includes("http"):false;
  const closeFunction = () => {closeModal?closeModal():someFunction()};

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeFunction}
      >
        <div className={!darkMode ? "dark" : ""}>
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="modal max-w-[1000px] max-h-screen mx-auto z-10 p-7 bg-white border-black border-4 rounded-lg shadow-xl dark:bg-gray-800 dark:border-white dark:text-white">
                <div className="flex justify-between items-center mb-4 ">
                  <div className="flex gap-10 ">
                    <Dialog.Title className="text-4xl font-bold mobile:text-xl">
                      {title}
                    </Dialog.Title>
                  </div>
                  <div>
                    <button
                      className="text-2xl mobile:text-lg text-gray-900"
                      onClick={closeFunction}
                    >
                      <XIcon className="w-6 h-6 mobile:w-3 mobile:h-3 justify-end dark:text-white" />
                    </button>
                  </div>
                </div>
                <h2 className="text-xl mobile:text-base text-gray-500 mt-2 dark:text-rose-100">
                  {subtitle}{" "}
                </h2>
                <p className="text-sm text-gray-700 pr-6 mt-3 relative flex justify-end gap-3">
                  <span className="absolute h-2 mobile:h-1 sm:h-1 rounded-md bg-pink-700 w-40 top-0 left-0"></span>
                </p>

                <p className="text-gray-500 mt-7 mobile:text-base mobile:mt-4 dark:text-white">
                  {isUrlContainsLink ? (
                    <a
                      className="animate-pulse text-pink-700 dark:text-white hover:cursor-pointer inline-block after:content-['→'] after:text-lg after:font-extrabold after:ml-2 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100 hover:after:ml-3"
                      href={description}
                    >
                      Link To Live Demo
                    </a>
                  ) : (
                    description
                  )}
                </p>
                <p className="dark:text-red-100 mobile:text-base">
                  <span className="font-bold">Tools:{"  "}</span>
                  {usedTools?usedTools.map((tool, index) =>
                    index === usedTools.length - 1 ? tool : tool + " | "
                  ):""}
                </p>

                {isVideo ? (
                  <div className="mx-auto p-5 w-3/5">
                    <video autoPlay controls className="rounded-xl">
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="mx-auto p-5 max-w-lg h-auto">
                    <Carousel
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={2000}
                    >
                      {images?images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={`Image ${index}`}
                            className="rounded-xl max-w-full max-h-64 mobile:max-h-48 sm:max-h-48 "
                          />
                        </div>
                      )):""}
                    </Carousel>{" "}
                  </div>
                )}
                <div className="flex justify-end gap-3 text-right mobile:text-base sm:text-base">
                  <p className="font-bold mt-1">Source code</p>
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-3xl mobile:text-2xl sm:text-2xl"
                  >
                    {isUrlContainsGit ? <AiFillGithub /> : <SiGooglecolab />}
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      </Transition.Root>
  );
}

export default Modal;
