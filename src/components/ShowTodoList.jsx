import React from "react";
import { useTheme } from "../theme/ThemeContext";
import ListShow from "./ListShow";

function ShowTodoList({ todos, setTodos, filter }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`flex-row ${
        isDark ? "bg-[#363062]" : "bg-white"
      } h-[55%] overflow-y-scroll overflow-hidden w-full shadow-2xl rounded-md py-3`}
    >
      <ListShow todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default ShowTodoList;