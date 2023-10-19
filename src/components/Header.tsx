import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className="p-4 fixed right-0 top-0 z-10">
      <div className="relative">
        <button onClick={toggleMenu}>
          <div className="p-2 shadow-lg">
            <AiOutlineMenu className="text-2xl text-gray-800" />
          </div>
        </button>
        {menuActive && (
          <div className="w-48 absolute right-0 top-10 mt-2 bg-white rounded-lg shadow-sm">
            <ul className="flex flex-col space-y-4 p-4">
              <li className="nav-item">
                <a
                  href="#portfolio"
                  className="text-gray-800 hover:underline"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#skills"
                  className="text-gray-800 hover:underline"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className="text-gray-800 hover:underline"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact-me"
                  className="text-gray-800 hover:underline"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
