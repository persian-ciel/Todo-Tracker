import React, { useState } from "react";
import Header from "./Header";
import NewTodo from "./NewTodo";
import ShowTodoList from "./ShowTodoList";
import Footer from "./Footer";

function MainContainer() {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    { id: 1, job: "Todo 1", completed: false },
    { id: 2, job: "Todo 2", completed: false },
    { id: 3, job: "Todo 3", completed: false },
    { id: 4, job: "Todo 4", completed: false },
    { id: 5, job: "Todo 5", completed: false },
    { id: 6, job: "Todo 6", completed: false },
    { id: 7, job: "Todo 7", completed: false },
    { id: 8, job: "Todo 8", completed: false },
  ]);

  const handleClearCompleted = () => {
    setTodos((items) => items.filter((item) => !item.completed));
  };

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex-row sm:w-[30rem] w-[85%] h-screen justify-center pt-[3rem]">
      <Header />
      <NewTodo todos={todos} setTodos={setTodos} />
      <ShowTodoList todos={todos} setTodos={setTodos} filter={filter} />
      <Footer
        setFilter={setFilter}
        onClearCompleted={handleClearCompleted}
        todos={todos}
      />
    </div>
  );
}

export default MainContainer;
