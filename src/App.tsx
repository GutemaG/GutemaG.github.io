import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md"; // New icon for email
import { IoCloseSharp } from "react-icons/io5";
import { FaBars, FaPhone, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import { FaReact, FaVuejs, FaPython, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoRedux,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { GiSpiderWeb } from "react-icons/gi";
import { BiLogoDjango } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";
import { SiPandas } from "react-icons/si";

import portfolioImage from "./assets/birhanu.jpg"; // Correct path to your image
import astuLogo from "./assets/astu-logo.png"; // Placeholder for ASTU logo. Update this path to your actual logo.

import wumis1 from "/projects/wumis1.png"; // Assuming these are in public/projects or src/assets/projects
import wumis2 from "/projects/wumis2.png";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  { id: "python", name: "Python", icon: <FaPython size={40} /> },
  { id: "django", name: "Django", icon: <BiLogoDjango size={40} /> },
  { id: "fast_api", name: "Fast API", icon: <SiFastapi size={40} /> },
  { id: "pandas", name: "Pandas", icon: <SiPandas size={40} /> },
  { id: "react", name: "React", icon: <FaReact size={40} /> },
  { id: "redux", name: "Redux", icon: <BiLogoRedux size={40} /> },
  { id: "vue", name: "Vue", icon: <FaVuejs size={40} /> },
  { id: "github", name: "GitHub", icon: <FaGithub size={40} /> },
  { id: "git", name: "Git", icon: <FaGitAlt size={40} /> },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <BiLogoTypescript size={40} />,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: <BiLogoJavascript size={40} />,
  },
  {
    id: "postgreSQL",
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={40} />,
  },
  { id: "MySQL", name: "MySQL", icon: <DiMysql size={40} /> },
  {
    id: "responsive-web-design",
    name: "Web Design",
    icon: <GiSpiderWeb size={40} />,
  },
];
const projects = [
  {
    id: "wumis",
    name: "Water Utility Management Information System (WUMIS)",
    description:
      "WUMIS is an innovative Water Utility Management Information System designed to empower utilities in Ethiopia by enhancing efficiency, reducing operational costs, and significantly improving overall performance. Developed by a consortium of experienced Ethiopian companies, WUMIS combines advanced information technology with comprehensive sector insights. With functional modules covering customer services, finances, human resources, property management, and analytics, WUMIS aims to meet the specific needs and priorities of utilities, ultimately serving their customers better. Discover WUMIS – your partner in successful water utility management.",
    images: [wumis1, wumis2], // Array of image paths
    link: "https://wumis.et",
  },
];

interface Testimonial {
  name: string;
  email: string;
  phone: string;
  image: string;
  title: string;
  message: string;
}

// Testimonial data
const testimonials: Testimonial[] = [];
// {
//   name: "Abebe Kebede",
//   email: "abebe.kebede@example.com",
//   phone: "+251 91 123 4567",
//   image: "/testimonials/abebe.jpg", // Place images in public/testimonials/
//   title: "Senior Software Engineer, XYZ Corp.",
//   message: "Birhanu is a highly skilled developer with a great work ethic. ",
// },

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [carouselIndices, setCarouselIndices] = useState(() =>
    projects.map(() => 0)
  );

  const [testimonialStartIdx, setTestimonialStartIdx] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setCardsToShow(3);
      } else {
        setCardsToShow(1);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const visibleTestimonials = testimonials.slice(
    testimonialStartIdx,
    testimonialStartIdx + cardsToShow
  );
  // If at the end, wrap around
  if (visibleTestimonials.length < cardsToShow) {
    visibleTestimonials.push(
      ...testimonials.slice(0, cardsToShow - visibleTestimonials.length)
    );
  }

  return (
    <div className="min-h-screen bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText font-sans transition-colors duration-500">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-lightBackground/90 dark:bg-darkBackground/90 border-b border-lightSecondary dark:border-darkSecondary backdrop-blur flex items-center justify-between px-6 py-3 shadow-md">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-lightText dark:text-darkText focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <IoCloseSharp className="h-8 w-8 text-lightAccent dark:text-darkAccent" />
            ) : (
              <FaBars className="h-8 w-8 text-lightAccent dark:text-darkAccent" />
            )}
          </button>
        </div>

        {/* Brand Name (Hidden on mobile when menu is open, shown otherwise) */}
        <div
          className={`font-bold text-2xl tracking-tight text-lightAccent dark:text-darkAccent ${
            isMobileMenuOpen ? "hidden" : "block"
          } md:block`}
        >
          Birhanu G.
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-lightAccent dark:hover:text-darkAccent transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Birhanu-Guidsa-Resume.pdf"
              download
              className="hover:text-lightAccent dark:hover:text-darkAccent transition-colors duration-200"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Theme Switcher Icon */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full text-lightText dark:text-darkText hover:bg-lightSecondary dark:hover:bg-darkSecondary transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <GoSun className="h-7 w-7 text-darkAccent" />
          ) : (
            <FaRegMoon className="h-7 w-7 text-lightAccent" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-lightBackground/95 dark:bg-darkBackground/95 z-40 flex flex-col items-center justify-center pt-20">
          <ul className="flex flex-col gap-8 text-3xl font-bold">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  className="text-lightText dark:text-darkText hover:text-lightAccent dark:hover:text-darkAccent transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Birhanu-Guidsa-Resume.pdf"
                download
                className="hover:text-lightAccent dark:hover:text-darkAccent transition-colors duration-200"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <header
        id="hero"
        className="relative flex flex-col md:flex-row items-center justify-center md:justify-around text-center md:text-left min-h-screen pt-24 pb-16 md:py-0 px-4 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Geometric Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Animated Circles */}
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-lightAccent dark:bg-darkAccent opacity-20 animate-float-slow" />
          <div className="absolute bottom-16 right-16 w-16 h-16 rounded-full bg-lightAccent dark:bg-darkAccent opacity-20 animate-float-slower" />
          {/* Animated Square */}
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-lightSecondary dark:bg-darkSecondary opacity-10 rotate-12 animate-rotate-slow" />
          {/* Animated Triangle (using clip-path) */}
          <div
            className="absolute bottom-24 left-1/2 w-20 h-20 bg-lightAccent dark:bg-darkAccent opacity-10 animate-float-slower"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>

        <div
          className="relative z-10 flex flex-col items-center md:items-start max-w-xl md:pr-10 mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <p className="text-xl md:text-2xl font-light mb-4 text-lightText dark:text-darkText">
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight text-lightAccent dark:text-darkAccent leading-tight">
            Birhanu G.
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-lightText dark:text-darkText">
            Full Stack Developer and Data Science Enthusiast
          </p>
          <a
            href="#contact"
            className="inline-block bg-lightAccent hover:bg-lightAccent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80 text-white px-10 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Contact Me
          </a>
        </div>

        {/* Profile Image */}
        <div
          className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-lightAccent dark:border-darkAccent shadow-2xl transition-all duration-500 transform hover:scale-105"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img
            src={portfolioImage}
            alt="Birhanu Guidsa - Software Engineer"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-4 py-16 scroll-mt-24 border-t border-lightSecondary dark:border-darkSecondary" // Added scroll-mt-24
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-stretch">
          {/* About Me (Left) */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-lightAccent dark:text-darkAccent">
              About Me
            </h2>
            <p className="text-lg font-light leading-relaxed text-lightText dark:text-darkText">
              Hi, I'm Birhanu, a passionate developer specializing in building
              modern, scalable web applications. With a strong foundation in
              React, TypeScript, and Python, I bring ideas to life through clean
              and efficient code. I'm constantly exploring new technologies and
              enjoy solving complex problems to deliver impactful digital
              experiences. My goal is to create intuitive and performant
              applications that leave a lasting impression.
            </p>
          </div>
          {/* Education (Right) */}
          <div className="flex-1 flex flex-col items-center md:items-start md:mt-0">
            <h3 className="text-2xl font-bold mb-6 text-lightAccent dark:text-darkAccent">
              Education
            </h3>
            <div className="relative pl-6 border-l-2 border-lightAccent dark:border-darkAccent">
              {/* MSc Degree */}
              <div className="mb-8 flex items-center gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-white dark:bg-darkSecondary rounded-full flex items-center justify-center border border-lightAccent dark:border-darkAccent shadow">
                  <img
                    src={astuLogo}
                    alt="ASTU Logo"
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg text-lightText dark:text-darkText">
                    MSc Degree
                  </div>
                  <div className="text-sm text-lightAccent dark:text-darkAccent font-medium">
                    Adama Science and Technology University (ASTU)
                  </div>
                </div>
              </div>
              {/* BSc Degree */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-white dark:bg-darkSecondary rounded-full flex items-center justify-center border border-lightAccent dark:border-darkAccent shadow">
                  <img
                    src={astuLogo}
                    alt="ASTU Logo"
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg text-lightText dark:text-darkText">
                    BSc Degree
                  </div>
                  <div className="text-sm text-lightAccent dark:text-darkAccent font-medium">
                    Adama Science and Technology University (ASTU)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (now inline) */}
      <section
        className="w-full py-16 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText"
        id="skills"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-lightAccent dark:text-darkAccent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="flex flex-col items-center bg-lightSecondary dark:bg-darkSecondary border border-lightSecondary dark:border-darkSecondary rounded-xl p-6 shadow-lg hover:bg-lightAccent dark:hover:bg-darkAccent transition-all duration-300 transform hover:scale-105 group" // Added 'group' class here
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <div className="mb-4 text-lightAccent dark:text-darkAccent transition-all duration-300 group-hover:text-white dark:group-hover:text-darkBackground group-hover:scale-110">
                  {/* Changed dark:group-hover:text-darkBackground to make it more visible on darkAccent hover */}
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold whitespace-nowrap text-lightText dark:text-darkText transition-colors duration-300 group-hover:text-white dark:group-hover:text-darkBackground">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-4 py-16 text-center border-t border-lightSecondary dark:border-darkSecondary"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-bold mb-8 text-lightAccent dark:text-darkAccent">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const currentImgIdx = carouselIndices[index] || 0;
            const hasImages = project.images && project.images.length > 0;
            return (
              <div
                key={project.id}
                className="bg-lightSecondary dark:bg-darkSecondary border border-lightSecondary dark:border-darkSecondary rounded-xl p-4 shadow-lg text-left flex flex-col items-start transform hover:scale-105 transition-transform duration-300"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <h3 className="text-2xl font-semibold mb-2 text-lightAccent dark:text-darkAccent">
                  {project.name}
                </h3>
                {hasImages && (
                  <div className="relative w-full flex flex-col items-center mb-3">
                    <img
                      src={project.images[currentImgIdx]}
                      alt={`${project.name} screenshot ${currentImgIdx + 1}`}
                      className="w-full max-h-56 object-contain rounded-lg shadow-md border border-lightSecondary dark:border-darkSecondary"
                    />
                    {project.images.length > 1 && (
                      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 -translate-y-1/2">
                        <button
                          type="button"
                          aria-label="Previous image"
                          className="bg-lightAccent/80 dark:bg-darkAccent/80 text-white rounded-full p-1 hover:bg-lightAccent dark:hover:bg-darkAccent shadow"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndices((indices) => {
                              const newIndices = [...indices];
                              newIndices[index] =
                                (currentImgIdx - 1 + project.images.length) %
                                project.images.length;
                              return newIndices;
                            });
                          }}
                        >
                          &#8592;
                        </button>
                        <button
                          type="button"
                          aria-label="Next image"
                          className="bg-lightAccent/80 dark:bg-darkAccent/80 text-white rounded-full p-1 hover:bg-lightAccent dark:hover:bg-darkAccent shadow"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndices((indices) => {
                              const newIndices = [...indices];
                              newIndices[index] =
                                (currentImgIdx + 1) % project.images.length;
                              return newIndices;
                            });
                          }}
                        >
                          &#8594;
                        </button>
                      </div>
                    )}
                    {project.images.length > 1 && (
                      <div className="mt-1 text-xs text-center text-lightAccent dark:text-darkAccent">
                        {currentImgIdx + 1} / {project.images.length}
                      </div>
                    )}
                  </div>
                )}
                <p className="mb-3 text-lightText dark:text-darkText text-sm flex-grow">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-lightAccent hover:bg-lightAccent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    View Project &rarr;
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        id="testimonials"
        className="w-full py-16 bg-gradient-to-r from-lightAccent/10 via-lightBackground to-darkAccent/10 dark:from-darkAccent/20 dark:via-darkBackground dark:to-lightAccent/10 border-t border-lightSecondary dark:border-darkSecondary flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-8 text-lightAccent dark:text-darkAccent text-center">
            Testimonials
          </h2>
          <div className="relative w-full flex flex-col items-center">
            <div
              className={`flex w-full gap-6 justify-center items-stretch transition-all duration-300`}
              style={{ minHeight: "340px" }}
            >
              {visibleTestimonials.map((t, i) => (
                <div
                  key={testimonialStartIdx + i + t.email}
                  className="flex-1 max-w-xs bg-white dark:bg-darkSecondary rounded-xl shadow-lg p-8 flex flex-col items-center border border-lightSecondary dark:border-darkSecondary mx-auto"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-lightAccent dark:border-darkAccent mb-4 shadow"
                  />
                  <blockquote className="italic text-base text-gray-700 dark:text-gray-200 mb-4 text-center">
                    "{t.message}"
                  </blockquote>
                  <div className="font-semibold text-lightAccent dark:text-darkAccent text-lg mb-1">
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {t.title}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                    {t.email} | {t.phone}
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Controls */}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="bg-lightAccent/80 dark:bg-darkAccent/80 text-white rounded-full p-2 hover:bg-lightAccent dark:hover:bg-darkAccent shadow"
                onClick={() =>
                  setTestimonialStartIdx(
                    (idx) =>
                      (idx - 1 + testimonials.length) % testimonials.length
                  )
                }
              >
                &#8592;
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="bg-lightAccent/80 dark:bg-darkAccent/80 text-white rounded-full p-2 hover:bg-lightAccent dark:hover:bg-darkAccent shadow"
                onClick={() =>
                  setTestimonialStartIdx(
                    (idx) => (idx + 1) % testimonials.length
                  )
                }
              >
                &#8594;
              </button>
            </div>
            {/* Dots */}
            <div className="flex gap-1 mt-3">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-2 h-2 rounded-full ${
                    i === testimonialStartIdx
                      ? "bg-lightAccent dark:bg-darkAccent"
                      : "bg-lightSecondary dark:bg-darkSecondary"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 py-16 text-center border-t border-lightSecondary dark:border-darkSecondary mb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-bold mb-8 text-lightAccent dark:text-darkAccent">
          Contact Me
        </h2>
        <p className="mb-12 text-lg font-light leading-relaxed text-lightText dark:text-darkText max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out through any of the methods below, or send me a direct
          message!
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 lg:gap-16 items-start">
          {/* Contact Information (Left) */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full md:w-auto">
            <h3 className="text-2xl font-bold mb-6 text-lightAccent dark:text-darkAccent">
              Get in Touch
            </h3>
            <div className="space-y-6 text-left w-full">
              {/* Phone */}
              <div className="flex items-center gap-4 text-lg text-lightText dark:text-darkText">
                <FaPhone
                  size={24}
                  className="text-lightAccent dark:text-darkAccent flex-shrink-0"
                />
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href="tel:+251921641744"
                    className="hover:underline text-lightText dark:text-darkText"
                  >
                    +251 92 164 1744
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 text-lg text-lightText dark:text-darkText">
                <FaWhatsapp
                  size={24}
                  className="text-lightAccent dark:text-darkAccent flex-shrink-0"
                />
                <div>
                  <span className="font-semibold">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/251921641744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-lightText dark:text-darkText"
                  >
                    +251 92 164 1744
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-lg text-lightText dark:text-darkText">
                <FaTelegramPlane
                  size={24}
                  className="text-lightAccent dark:text-darkAccent flex-shrink-0"
                />
                <div>
                  <span className="font-semibold">Telegram:</span>{" "}
                  <a
                    href="https://t.me/birhanugu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-lightText dark:text-darkText"
                  >
                    @birhanugu
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 text-lg text-lightText dark:text-darkText">
                <FaGithub
                  size={24}
                  className="text-lightAccent dark:text-darkAccent flex-shrink-0"
                />
                <div>
                  <span className="font-semibold">GitHub:</span>{" "}
                  <a
                    href="https://github.com/GutemaG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-lightText dark:text-darkText"
                  >
                    GutemaG
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Form (Right) */}
          <div className="flex-1 w-full md:w-auto">
            <h3 className="text-2xl font-bold mb-6 text-lightAccent dark:text-darkAccent">
              Send a Message
            </h3>
            <form
              className="max-w-xl mx-auto md:mx-0 text-left bg-lightSecondary dark:bg-darkSecondary p-6 rounded-xl shadow-lg border border-lightSecondary dark:border-darkSecondary"
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                  name: { value: string };
                  email: { value: string };
                  message: { value: string };
                };
                const name = target.name.value;
                const email = target.email.value;
                const message = target.message.value;
                window.location.href = `mailto:bir13gud17@gmail.com?subject=Contact from Portfolio by ${encodeURIComponent(
                  name
                )}&body=${encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                )}`;
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-lightText dark:text-darkText"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border border-lightAccent/30 dark:border-darkAccent/30 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText focus:outline-none focus:ring-2 focus:ring-lightAccent dark:focus:ring-darkAccent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-lightText dark:text-darkText"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg border border-lightAccent/30 dark:border-darkAccent/30 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText focus:outline-none focus:ring-2 focus:ring-lightAccent dark:focus:ring-darkAccent"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-1 font-medium text-lightText dark:text-darkText"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 rounded-lg border border-lightAccent/30 dark:border-darkAccent/30 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText focus:outline-none focus:ring-2 focus:ring-lightAccent dark:focus:ring-darkAccent"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-lightAccent hover:bg-lightAccent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <MdEmail size={20} /> Send Email
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm bg-lightSecondary dark:bg-darkSecondary text-lightText dark:text-darkText border-t border-lightSecondary dark:border-darkSecondary">
        <p>&copy; {new Date().getFullYear()} Gutema G. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
