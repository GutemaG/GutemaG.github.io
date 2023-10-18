import { FaXTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";
import bg1 from "../assets/header-bg.png";
import mobileBg from "../assets/mobile-bg.png";

const PortfolioSection = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <section
      className="bg-white py-32 -mt-1 h-screen rounded-bl-10xl"
      id="portfolio"
      style={{
        // backgroundColor:"red",
        backgroundImage: `url(${isMobile ? mobileBg : bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          I’m Birhanu Glad to see you!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          I’m a software developer! I can help you build a product, feature, or
          website. Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hesitate to contact
          me.
        </p>
        <div className="flex items-center gap-6">
          <h3 className="text-xl text-blue-500 font-bold">LET’S CONNECT</h3>
          <ul className="flex gap-4">
            <li>
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
