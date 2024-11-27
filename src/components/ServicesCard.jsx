import PropTypes from "prop-types";
const ServicesCard = ({ service, no }) => {
  return (
    <div id={service.title} className="space-y-5">
      <h4 className="text-3xl font-semibold text-black">{no + 1}.</h4>
      <h4 className="text-3xl font-bold text-primary tracking-wide">
        {service.title}
      </h4>
      <p className="text-sm">{service.description}</p>
      <div className="w-full h-[200px] ">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`/${service.images}`}
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
