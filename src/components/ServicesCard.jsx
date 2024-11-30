import PropTypes from "prop-types";
const ServicesCard = ({ service, no }) => {
  return (
    <div id={service.title} className="flex flex-col gap-5 md:flex-row md:gap-10 mb-10  pt-5">
      <h4 className="text-3xl font-semibold text-black">{no + 1}.</h4>

      <div className="space-y-4 ">
        <h4 className="text-3xl font-bold text-primary tracking-wide">
          {service.title}
        </h4>
        <p className="text-sm  sm:w-[50vw] md:text-lg lg:w-[60vw] lg:text-2xl">{service.description}</p>
      </div>

      <div className=" h-[200px] lg:h-[300px] ">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`/services_images/${service.images}`}
        />
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
  no: PropTypes.number,
};

export default ServicesCard;
