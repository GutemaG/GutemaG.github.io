import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      if (!prev) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return !prev;
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Birhanu
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#portfolio"
            className="text-gray-800 dark:text-gray-100 hover:underline transition"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-800 dark:text-gray-100 hover:underline transition"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-100 hover:underline transition"
          >
            About
          </a>
          <a
            href="#contact-me"
            className="text-gray-800 dark:text-gray-100 hover:underline transition"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <AiOutlineMenu className="text-2xl text-gray-800 dark:text-gray-100" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuActive && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg transition-all">
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <a
                href="#portfolio"
                className="text-gray-800 dark:text-gray-100 hover:underline"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-800 dark:text-gray-100 hover:underline"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 dark:text-gray-100 hover:underline"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact-me"
                className="text-gray-800 dark:text-gray-100 hover:underline"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
