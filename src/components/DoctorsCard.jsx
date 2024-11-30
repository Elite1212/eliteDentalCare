import PropTypes from "prop-types";
export const DoctorsCard = ({ doctor }) => {
  //   console.log(doctor);

  return (
    <div className="flex flex-col items-center gap-2 border-2 border-primary rounded-md mx-5 my-4 pt-5 pb-2 sm:mx-10 sm:pt-7 sm:pb-3 md:w-[50vw]">
      <div className="w-[80%] h-[400px] lg:h-[600px]  ">
        <img
          className="object-cover object-top w-full h-full rounded-md"
          src={`/${doctor.image}`}
        />
      </div>
      <h3 className="text-2xl font-bold text-center">
        {doctor.name} <span>{doctor.degrees}</span>
      </h3>
      <p className="text-md font-semibold text-center">{doctor.specialization}</p>
    </div>
  );
};
DoctorsCard.propTypes = {
  doctor: PropTypes.object.isRequired,
};
