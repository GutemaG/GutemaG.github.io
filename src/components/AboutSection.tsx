const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-100" id="about"  data-aos="fade-up">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Personal Description */}
          <div className="lg:w-2/3">
            <p className="text-lg mb-6">
              Hello! I'm Birhanu Gudisa, a passionate software developer. I enjoy creating robust and scalable applications that provide value to users. My journey in the tech world began at an early age, and since then, I've been immersed in coding, always eager to learn more.
            </p>
            <p className="text-lg mb-6">
              Over the years, I've worked on a diverse set of projects, ranging from simple web apps to complex distributed systems. Each project taught me something new, helping me grow as a developer.
            </p>
          </div>

          {/* Education Background */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">Education</h3>

            <div className="mb-6 bg-white p-4 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Microverse</h4>
              <p className="text-lg text-gray-600">Current Student</p>
            </div>

            <div className="mb-6 bg-white p-4 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Adama Science and Technology University (ASTU)</h4>
              <p className="text-lg text-gray-600">MSc Degree</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Adama Science and Technology University (ASTU)</h4>
              <p className="text-lg text-gray-600">BSc Degree</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
