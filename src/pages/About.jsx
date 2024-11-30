import { DoctorsCard } from "../components/DoctorsCard";
import data from "../utils/data";
const About = () => {
  const dataa = [
    "We're here to make your smile shine. Our clinic is led by two skilled and experienced dentists: Dr. Dinakar and Dr. Shanti Priya. Together, they have helped many people keep their teeth healthy and their smiles bright.",
    "At Elite Dental Care, we believe that visiting the dentist should be easy and comfortable. Whether its your first visit or your tenth, well take good care of you. From regular check-ups to fixing toothaches, were here to help every step of the way.",
    "We use the latest tools to ensure you get the best care possible. But most importantly, we take time to explain everything in simple words, so you know exactly whats happening with your teeth",
    "Thank you for choosing Elite Dental Care. Lets work together for a happier, healthier smile!",
  ];
  const details = [
    {
      title: "Why Choose Us?",
      description:
        "At Elite Dental Care, we're not just about teeth we're about you! Here's why families trust us with their smiles:",
    },
    {
      title: "Experienced Dentists",
      description:
        "With Dr. Dinakar and Dr. Shanti Priya, you're in skilled hands. Their years of experience ensure gentle, effective dental care for patients of all ages.",
    },
    {
      title: "Personalized Care",
      description:
        "Every smile is unique, and our care reflects that. We listen to your concerns and ensure your comfort throughout your visit.",
    },
    {
      title: "Advanced Technology",
      description:
        "Our modern dental equipment ensures faster, safer, and comfortable treatments, getting you back to your daily routine sooner.",
    },
    {
      title: "Friendly Atmosphere",
      description:
        "Experience a warm welcome from the moment you arrive. Our team creates a relaxing environment that even kids love.",
    },
  ];
  return (
    <div className="bg-bg w-full min-h-screen">
      {/* Hero Image */}
      <section>
        <img
          src="/clinic/9.JPG"
          className="w-full h-[25vh] object-cover sm:h-[30vh] md:h-[40vh] lg:h-[80vh]"
        />
      </section>
      {/* Details Section */}
      <section className="px-5 py-10 md:px-10 md:py-20">
        <h2 className="text-primary text-2xl font-semibold mb-5 md:text-3xl lg:text-4xl">
          Welcome to Elite Dental Care
        </h2>
        <div className="space-y-5">
          {dataa.map((des, i) => (
            <p key={i} className="text-sm md:text-lg lg:text-xl">
              {des}
            </p>
          ))}
        </div>
      </section>

      {/* Border Line */}
      <div className="w-full h-[1px] bg-primary"></div>

      {/* Doctors Showcase */}
      <section className="mt-5 flex flex-col gap-5 md:mt-10">
        <h3 className="text-center text-primary text-2xl font-semibold">
          Meet Our Professional Doctors
        </h3>
        <div className="flex flex-col md:flex-row ">
          {data.doctors.map((doctor, i) => (
            <DoctorsCard key={i} doctor={doctor} />
          ))}
        </div>
      </section>
      {/* Why Choose Us Section */}
      <div className="px-5 md:px-10 ">
        {details.map((detail, i) => (
          <div key={i} className="my-5">
            <h3 className="text-primary text-2xl font-semibold mb-3 md:text-3xl">
              {detail.title}
            </h3>
            <p className="text-sm md:text-lg lg:text-xl">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
