import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="bg-white shadow-lg header">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a
          href="#"
          className="logo text-primary font-bold text-lg hover:scale-150 transition-transform"
        >
          Birhanu G
        </a>
        <button
          className="menu-icon bg-transparent border-none md:hidden"
          onClick={toggleMenu}
        >
          {!menuActive && <AiOutlineMenu />}
        </button>
        <ul
          className={`menu ${
            menuActive ? "flex flex-col md:flex-row" : "hidden"
          } md:flex md:items-center md:space-x-4`}
        >
          <li className="nav-item">
            <a
              href="#portfolio"
              className="text-primary hover:underline"
              onClick={closeMenu}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="text-primary hover:underline"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="text-primary hover:underline"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
          {menuActive && (
            <li className="nav-item">
              <a className="text-primary hover:underline" onClick={closeMenu}>
                <AiOutlineCloseCircle />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
