import React from "react";
import { useTheme } from "../theme/ThemeContext";
import MainContainer from "./MainContainer";

function MainContent() {
  const { isDark } = useTheme();
  return (
    <>
      <div
        className={`relative h-screen w-screen  overflow-hidden ${
          isDark ? "bg-[#0B192C] text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="absolute inset-0">
          <img
            src={
              isDark
                ? "/images/bg-desktop-dark.jpg"
                : "/images/bg-desktop-light.jpg"
            }
            className="object-cover w-full hidden sm:block"
          />

          <img
            src={
              isDark
                ? "/images/bg-mobile-dark.jpg"
                : "/images/bg-mobile-light.jpg"
            }
            className="object-cover w-full block sm:hidden"
          />
        </div>
        <MainContainer />
      </div>
    </>
  );
}

export default MainContent;
