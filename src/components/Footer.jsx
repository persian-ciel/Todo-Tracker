import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

function Footer({ setFilter, onClearCompleted, todos }) {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <>
      <div
        className={`h-[2rem] rounded-b-lg flex justify-between -translate-y-5 px-6 items-center py-1 text-sm ${
          isDark ? "bg-[#363062]" : "bg-white"
        } w-full`}
      >
        <div className="text-neutral-500">
          {todos.filter((item) => !item.completed).length} item left
        </div>

        <div className="hidden sm:flex">
          <button
            className={`${
              activeFilter === "all" ? "text-blue-600" : "text-neutral-500"
            } ${isDark ? "hover:text-white" : "hover:text-black"} cursor-pointer`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>{" "}
          <button
            className={`${
              activeFilter === "active" ? "text-blue-600" : "text-neutral-500"
            } ${isDark ? "hover:text-white" : "hover:text-black"} cursor-pointer mx-3`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>{" "}
          <button
            className={`${
              activeFilter === "completed" ? "text-blue-600" : "text-neutral-500"
            } ${isDark ? "hover:text-white" : "hover:text-black"} cursor-pointer`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
        </div>

        <div
          className={`${
            isDark ? "hover:text-white" : "hover:text-black"
          } text-neutral-500 cursor-pointer`}
          onClick={onClearCompleted}
        >
          Clear Completed
        </div>
      </div>

      <div
        className={`h-[3rem] mt-3 sm:hidden rounded-lg flex justify-center -translate-y-5 px-6 items-center py-1 text-sm ${
          isDark ? "bg-[#363062]" : "bg-white"
        } w-full`}
      >
        <div className="justify-between">
          <button
            className={`${
              activeFilter === "all" ? "text-blue-600" : "text-neutral-500"
            } ${isDark ? "hover:text-white" : "hover:text-black"} cursor-pointer`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>{" "}
          <button
            className={`${
              activeFilter === "active" ? "text-blue-600" : "text-neutral-500"
            } ${isDark ? "hover:text-white" : "hover:text-black"} cursor-pointer mx-3`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>{" "}
          <button
            className={`${
              activeFilter === "completed" ? "text-blue-600" : "text-neutral-500"
            } ${isDark ? "hover:text-white" : "hover:text-black"} cursor-pointer`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;