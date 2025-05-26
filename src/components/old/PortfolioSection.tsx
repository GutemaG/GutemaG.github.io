import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import portfolioImage from "../assets/bir.png";

const PortfolioSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-24 px-4 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
      id="portfolio"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 dark:bg-blue-900 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-900 opacity-20 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/3">
          <img
            src={portfolioImage}
            alt="Birhanu Gudisa"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-2xl border-4 border-blue-400 dark:border-blue-700 object-cover mb-6 md:mb-0"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Birhanu</span>.
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold block mt-2">
              Passionate Software Developer
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            I craft innovative digital solutions. Explore my projects and
            skills, and let's collaborate to build something amazing.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <a
              href="#contact-me"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-lg"
            >
              Let's Connect
            </a>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/birhanugudisa/"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/GutemaG"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.facebook.com/birhanu.gudisa.33/"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://x.com/birhanugudisa3?t=AtT587FPdois4GNs-ZMzkQ&s=09"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
