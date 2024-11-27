import MoveToButton from "../components/MoveToButton";
import ServicesCard from "../components/ServicesCard";
import data from "../utils/data";

const Services = () => {
  return (
    <section id="services" className="bg-bg w-full min-h-screen">
      {/* Top Section */}
      <section className="w-full h-[20vh] bg-[url('/tic-tac-toe.png')] relative ">
        <div className="bg-primary w-full h-full opacity-20 flex items-center justify-center"></div>
        <div className="w-full h-[20vh] flex flex-col items-center justify-center absolute top-0 gap-3">
          <h1 className="text-2xl font-semibold text-gray-800 tracking-wider">
            TREATMENTS & SERVICES
          </h1>
          <a className="text-white bg-primary text-xl rounded-full px-5 py-1 font-bold tracking-wide">
            <h1>Book Your Appoinment</h1>
          </a>
        </div>
        <div>
          <svg
            aria-hidden="true"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary opacity-50 w-[40px] absolute bottom-3 left-3 rotate-[45deg]"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>
      </section>
      {/* Buttons Section */}
      <section className="px-8 py-10 flex flex-col gap-3">
        {data.services.map((service, index) => {
          return (
            <MoveToButton
              key={index}
              title={service.title}
              href={service.title}
            />
          );
        })}
      </section>
      {/* Bottom Section */}
      <section className="px-8 flex flex-col gap-8">
        {data.services.map((data, index) => {
          return <ServicesCard key={index} service={data} no={index} />;
        })}
      </section>
    </section>
  );
};

export default Services;
