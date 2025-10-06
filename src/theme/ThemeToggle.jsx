// theme/ThemeToggle.jsx
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2  transition-colors duration-200"
    >
      {isDark ? <img src="/images/icon-sun.svg" /> : <img src="/images/icon-moon.svg" />}
    </button>
  );
}