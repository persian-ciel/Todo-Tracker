import React from "react";
import ThemeToggle from "../theme/ThemeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between  w-full h-[4.5rem] mb-[1rem]">
      <h1 className="uppercase tracking-widest text-4xl dark:text-white">Todo</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
