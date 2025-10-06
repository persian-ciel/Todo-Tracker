import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

function NewTodo({ todos, setTodos }) {
  const { isDark } = useTheme();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return; // اگر خالی بود کاری نکن
    const newTodo = {
      id: Date.now(), // id یکتا
      job: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue(""); // پاک کردن input
  };

  // اضافه کردن با Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="flex mb-[1.5rem]">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`py-5 px-10 ${
          isDark ? "bg-[#363062]" : "bg-white"
        } w-full shadow-2xl rounded-md focus:outline-none focus:ring-0 focus:border-none`}
      />
    </div>
  );
}

export default NewTodo;
