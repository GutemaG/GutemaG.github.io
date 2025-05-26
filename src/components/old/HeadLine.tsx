const HeadLine = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 transition-colors duration-500">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        Portfolio
      </h2>
      <div className="flex gap-4 justify-center">
        <img
          src="image1.jpg"
          alt="Image 1"
          className="w-1/3 rounded-lg shadow-lg"
        />
        <img
          src="image2.jpg"
          alt="Image 2"
          className="w-1/3 rounded-lg shadow-lg"
        />
        <img
          src="image3.jpg"
          alt="Image 3"
          className="w-1/3 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeadLine;
