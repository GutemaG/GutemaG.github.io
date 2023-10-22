import { FaPhone, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-900 rounded-xl" id="contact-me">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white">
          Contact Me
        </h2>

        <div className="flex flex-col sm:flex-row gap-12">
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-3xl font-bold mb-6 text-white">GET IN TOUCH</h3>
            <div className="mb-4 flex items-center text-white">
              <FaPhone size={24} className="mr-3" />
              <span className="text-xl">+2519-21-64-17-44</span>
            </div>
            <div className="mb-4 flex items-center text-white">
              <FaGithub size={24} className="mr-3" />
              <a href="https://github.com/GutemaG">
                <span className="text-xl">github.com/GutemaG</span>
              </a>
            </div>
            <div className="mb-4 flex items-center text-white">
              <FaWhatsapp size={24} className="mr-3" />
              <a
                href="https://wa.me/251921641744"
              >
                <span className="text-xl">+2519-21-64-17-44</span>
              </a>
            </div>
            <div className="flex items-center text-white">
              <FaTelegram size={24} className="mr-3" />
              <a href="https://t.me/birhanugu">
                <span className="text-xl">@birhanugu</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full sm:w-2/3">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-xl font-bold mb-2 text-white"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-xl font-bold mb-2 text-white"
                >
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xl font-bold mb-2 text-white"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>
              <div className="mt-6">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
