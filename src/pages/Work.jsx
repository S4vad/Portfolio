import React, { useState } from "react";
import data from "../data/data";
import { motion } from "framer-motion";

export default function Work() {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  return (
    <div className="p-5 md:p-10  md:w-[50%] w-full transition-all duration-700 opacity-0 blur-md animate-fade-in">
      <div className="flex flex-col gap-3">
        {data.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col gap-2 md:w-3/4">
              <h3 className="text-[15px] text-[#212529] dark:text-white">
                {item.title}
              </h3>
              <p className="text-[12px] -mt-2 text-neutral-400">
                {item.description}
              </p>
              <div className="flex gap-4 items-center text-neutral-300">
                {/* GitHub Link */}
                <div className="flex gap-2 items-center">
                  <a
                    className="border-b text-[#82b817] hover:text-[#a3d42a] inline-flex items-center gap-1 border-[#E0E0E0] dark:border-neutral-800 border-dashed transition-all"
                    href={item.gitLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                    <p className="text-[13px]">View Repo</p>
                  </a>
                </div>

                {item.webLink && (
                  <div className="items-center gap-2 flex text-[#82b817] hover:text-[#a3d42a]">
                    <a
                      className="border-b inline-flex items-center gap-1 dark:border-neutral-800 border-dashed transition-all border-[#E0E0E0]"
                      href={item.webLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-earth"
                      >
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                        <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                      <p className="text-[13px]">Website</p>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/*show more button*/}
      {visibleCount < data.length && (
        <div className="md:w-3/4 flex justify-end">
          <button
            onClick={showMore}
            className="flex items-center gap-2  text-[#82b817] hover:text-[#a3d42a] text-sm"
          >
            Show More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
