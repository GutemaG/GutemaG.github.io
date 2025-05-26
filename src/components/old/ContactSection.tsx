import { BiLogoGmail } from "react-icons/bi";
import { FaPhone, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      className="w-full py-24 bg-gray-900 dark:bg-gray-950 transition-colors duration-500"
      id="contact-me"
      data-aos="fade-up"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white dark:text-blue-300">
          Contact Me
        </h2>
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-3xl font-bold mb-6 text-white dark:text-blue-200">
              GET IN TOUCH
            </h3>
            <div className="mb-4 flex items-center text-white dark:text-blue-100">
              <FaPhone size={24} className="mr-3" />
              <span className="text-xl">+2519-21-64-17-44</span>
            </div>
            <div className="mb-4 flex items-center text-white dark:text-blue-100">
              <FaGithub size={24} className="mr-3" />
              <a href="https://github.com/GutemaG">
                <span className="text-xl">github.com/GutemaG</span>
              </a>
            </div>
            <div className="mb-4 flex items-center text-white dark:text-blue-100">
              <FaWhatsapp size={24} className="mr-3" />
              <a href="https://wa.me/251921641744">
                <span className="text-xl">+2519-21-64-17-44</span>
              </a>
            </div>
            <div className="flex items-center text-white dark:text-blue-100">
              <FaTelegram size={24} className="mr-3" />
              <a href="https://t.me/birhanugu">
                <span className="text-xl">@birhanugu</span>
              </a>
            </div>
            <div className="mt-2 flex items-center text-white dark:text-blue-100">
              <BiLogoGmail size={24} className="mr-3" />
              <span className="text-xl">bir13gud17@gmail.com</span>
            </div>
          </div>
          {/* Contact Form */}
          <form
            action="mailto:bir13gud17@gmail.com"
            method="GET"
            encType="text/plain"
            className="w-full sm:w-2/3 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-colors"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-xl font-bold mb-2 text-gray-900 dark:text-white"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-xl font-bold mb-2 text-gray-900 dark:text-white"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
