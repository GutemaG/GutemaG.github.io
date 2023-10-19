import { FaPhone, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-900 rounded-xl" id="contact-me">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white">
          Contact Me
        </h2>

        <div className="flex gap-12">
          <div className="w-1/3">
            <h3 className="text-3xl font-bold mb-6 text-white">GET IN TOUCH</h3>
            <div className="mb-4 flex items-center text-white">
              <FaPhone size={24} className="mr-3" />
              <span className="text-xl">+123-456-7890</span>
            </div>
            <div className="mb-4 flex items-center text-white">
              <FaGithub size={24} className="mr-3" />
              <span className="text-xl">github.com/yourusername</span>
            </div>
            <div className="mb-4 flex items-center text-white">
              <FaWhatsapp size={24} className="mr-3" />
              <span className="text-xl">+123-456-7890</span>
            </div>
            <div className="flex items-center text-white">
              <FaTelegram size={24} className="mr-3" />
              <span className="text-xl">@yourtelegram</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-2/3">
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
