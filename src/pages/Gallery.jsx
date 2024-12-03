import { Link } from "react-router-dom";

const Gallery = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="bg-bg min-h-screen">
      {/* Text Section */}

      <section className="w-full h-[20vh] bg-[url('/tic-tac-toe.png')] relative sm:h-[25vh] md:h-[30vh] lg:h-[35vh] ">
        <div className="bg-primary w-full h-full opacity-20 flex items-center justify-center"></div>
        <div className="w-full h-[20vh] flex flex-col items-center justify-center absolute top-0 gap-3 sm:h-[25vh] md:h-[30vh] lg:h-[35vh] md:gap-5">
          <h1 className="text-4xl font-semibold text-gray-800 tracking-wider md:text-3xl">
            Our Gallery
          </h1>
          <Link to="/contact" className="text-white bg-primary text-xl rounded-full px-5 py-1 font-bold tracking-wide md:text-2xl">
            <h1>Book Your Appoinment</h1>
          </Link>
        </div>
        <div>
          <svg
            aria-hidden="true"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary opacity-50 w-[40px] absolute bottom-3 left-3 rotate-[45deg] sm:left-10 sm:bottom-7 md:left-20 lg:left-[300px]"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="flex flex-col items-center justify-center gap-5 my-5 md:flex-row md:flex-wrap md:gap-10 md:my-10">
        {arr.map((item) => (
          <div key={item} className="w-[90vw] h-[400px] md:w-[400px]">
            <img
              src={`/clinic/${item}.JPG`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
