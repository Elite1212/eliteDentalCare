import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";
import data from "../utils/data";

const clients = [
  {
    name: "Krishna Murthi",
    profession: "Teacher",
    des: "“Elite Dental Care offers professional, painless treatment in a spotless clinic. Friendly staff and modern equipment make visits enjoyable!”",
  },
  {
    name: "Nishant Sharma",
    profession: "Neurosurgeon",
    des: "“Amazing service! The dentist explained everything clearly. Comfortable, efficient, and clean. I highly recommend Elite Dental Care to everyone!”",
  },
  {
    name: "Rishi Jain",
    profession: "Business Man",
    des: "“I had a great experience with Elite Dental Care. The dentist was professional, friendly, and knowledgeable. The office was clean and welcoming. I would highly recommend them!”",
  },
  {
    name: "Aman Khan",
    profession: "Software Engineer",
    des: "“Friendly staff, modern clinic, and excellent care. Elite Dental Care provides thorough, painless treatments. Perfect for anyone seeking quality dental services!”",
  },
];
const Home = () => (
  <div className="w-full min-h-screen bg-bg">
    {/* Hero Section */}
    <section className="w-full h-[50vh] bg-gradient-to-br from-white to-primary px-5 py-5 flex flex-col  justify-center gap-5 sm:px-10 md:px-14 lg:px-20 md:gap-10 md:h-[60vh]">
      <h1 className="text-3xl font-bold text-balck tracking-wide md:text-6xl text-center text-[#996900]">
        Elite Dental Care
      </h1>
      <div className="flex items-center gap-5 ">
        <div className="w-1 h-16 bg-red-500"></div>

        <h1 className="text-3xl font-bold text-balck tracking-wide md:text-4xl">
          Affordable And Best Dental Clinic in Kurnool
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-xl font-semibold md:text-2xl">
          {`"`}
          Braces or Invisalign? 🦷 Choose your path to a perfect smile
          {`"`}
        </p>
        <p className="text-xl font-normal md:text-2xl">
          A Healthy Smile Starts Here!{" "}
        </p>
      </div>
      <div>
        <Link
          to="/contact"
          className="text-white bg-primary text-xl rounded-full px-7 py-2 font-bold md:text-2xl"
        >
          Book Appoinment
        </Link>
      </div>
    </section>
    {/* About Section */}
    <section className="px-5 my-5 flex flex-col gap-5 md:px-10 lg:px-14 md:gap-10 md:my-10">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold tracking-wider">
          About Elite Dental Care
        </h3>
        <div className="h-[3px] w-32 bg-primary"></div>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row md:gap-10 lg:gap-20">
        <div className=" min-h-[200px] max-h-[400px] h-[50vw] sm:w-[40vw] sm:max-h-[300px] lg:max-h-[400px] ">
          <iframe
            src="https://www.youtube.com/embed/AP2CPCPZN58?si=8y2f8dYqaANKIJf4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            //   className="w-full min-h-[200px] max-h-[400px] h-[50vw] rounded-lg"
            className="w-full h-full sm:w-[40vw] rounded-lg"
          ></iframe>
        </div>
        <p className="text-base md:text-lg md:tex-xl lg:text-2xl">
          We are delighted that you have chosen us for your dental care. Our
          commitment is to provide you with compassionate, personalized service,
          combining warmth with the highest standard of oral healthcare.
          <br />
          <br />
          We believe dentistry should be a comfortable and pampering experience.
          Thats why we take the time to understand your concerns, needs, and
          goals, ensuring a tailored approach to achieving your optimal oral
          health.
        </p>
      </div>
    </section>
    {/* Services Section */}
    <section className="mt-10">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold tracking-wider">Our Services</h3>
        <div className="h-[3px] w-32 bg-primary"></div>
      </div>
      <section className="px-8 flex flex-col  md:gap-9">
        {data.services.slice(0, 4).map((data, index) => {
          return <ServicesCard key={index} service={data} no={index} />;
        })}
      </section>
      <div className="center">
        <Link to="/services">
          <p className="text-white bg-primary text-xl rounded-full px-7 py-2 font-bold md:text-2xl">
            View All Services
          </p>
        </Link>
      </div>
    </section>
    {/* About section */}
    <section className="w-full  bg-gradient-to-br from-white to-primary px-5 py-10 md:py-10 flex flex-col  justify-center gap-5 sm:px-10 md:px-14 lg:px-20 md:gap-10  mt-10">
      <div className="text-center flex flex-col gap-5 md:gap-10">
        <p className="text-3xl font-semibold text-balck tracking-wide md:text-4xl">
          Specialized in General Dentistry, Teeth Braces & Invisalign
        </p>
        <p className="text-xl font-normal md:text-2xl">
          At Elite Dental Care we provide all types of Dental treatments for
          your entire family
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 text-center">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">10 +</p>
          <p className="text-xl font-semibold">EXPERIENCE</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">250 +</p>
          <p className="text-xl font-semibold">CLIENT RATING</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">1000 +</p>
          <p className="text-xl font-semibold ">HAPPY PATIENTS</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">500 +</p>
          <p className="text-xl font-semibold">HAPPY SMILES</p>
        </div>
      </div>
    </section>
    {/* Reviews Section */}
    <section>
      <div className="space-y-5 w-full my-10 md:space-y-10">
        <h1 className="text-secondary text-center text-2xl font-normal md:text-3xl lg:text-4xl">
          Meet Our Happy Clients
        </h1>
        <div className="px-5 grid grid-cols-1 gap-10 md:grid-rows-2 md:grid-cols-2 md:px-10 lg:px-40">
          {clients.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(205,154,45,0.2)] rounded-md p-5 space-y-3"
            >
              <div className="flex items-center gap-5">
                <div className="aspect-square w-[70px] ">
                  <img
                    src={`/clients/${index + 1}.jpg`}
                    alt="client"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-black text-xl font-normal lg:text-2xl">
                    {item.name}
                  </h1>
                  <p className="text-secondary font-light text-sm lg:text-lg">
                    {item.profession}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-secondary font-normal text-sm lg:text-xl">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
