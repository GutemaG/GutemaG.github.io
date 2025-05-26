const AboutSection = () => {
  return (
    <section
      className="w-full py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
      id="about"
      data-aos="fade-up"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800 dark:text-white">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Personal Description */}
          <div className="lg:w-2/3">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-200">
              Hello! I'm Birhanu Gudisa, a passionate software developer. I
              enjoy creating robust and scalable applications that provide value
              to users. My journey in the tech world began at an early age, and
              since then, I've been immersed in coding, always eager to learn
              more.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-200">
              Over the years, I've worked on a diverse set of projects, ranging
              from simple web apps to complex distributed systems. Each project
              taught me something new, helping me grow as a developer.
            </p>
          </div>
          {/* Education Background */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold mb-6 text-gray-700 dark:text-blue-300">
              Education
            </h3>
            <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Microverse
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Current Student
              </p>
            </div>
            <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Adama Science and Technology University (ASTU)
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                MSc Degree
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Adama Science and Technology University (ASTU)
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                BSc Degree
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
