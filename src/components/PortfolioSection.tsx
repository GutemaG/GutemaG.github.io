import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import portfolioImage from "../assets/bir.png";

const PortfolioSection = () => {
  return (
    <section
      className="py-32 h-screen bg-gray-50 text-gray-800 rounded-bl-10xl"
      id="portfolio"
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center">
        <div className="w-1/3 pr-8">
          <img
            src={portfolioImage}
            alt="Birhanu Gudisa"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
            Hi, I'm Birhanu. Passionate Software Developer.
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            I craft innovative digital solutions. Explore my projects and
            skills, and let's collaborate.
          </p>
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-bold border-b-2 border-blue-400">
              Connect with Me
            </h3>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/birhanugudisa/"
                  className="hover:text-blue-500 transition duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GutemaG"
                  className="hover:text-blue-500 transition duration-300"
                >
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/birhanu.gudisa.33/"
                  className="hover:text-blue-500 transition duration-300"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/birhanugudisa3?t=AtT587FPdois4GNs-ZMzkQ&s=09"
                  className="hover:text-blue-500 transition duration-300"
                >
                  <FaXTwitter size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
