const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-dye to-ash-gray-700 text-white py-16 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          Welcome to <span className="font-ysabeau">Stat Machine</span> Sports
          Data Analysis
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore articles and insights about trends in professional sports.
        </p>
        <a
          href="/about"
          className="bg-alabaster text-indigo-dye px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-dye-300 hover:text-alabaster transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
``;
