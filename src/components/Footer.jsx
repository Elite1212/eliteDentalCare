import { Link } from "react-router-dom";
import Clink from "./Clink";

export default function Footer() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <footer
      id="footer"
      className="w-full bg-black p-5 space-y-5 md:flex md:justify-around"
    >
      <div className="space-y-5 md:w-[30vw]">
        <div className="w-[150px] flex items-center gap-5 md:flex md:flex-col">
          <img alt="logo" src="/logo1.png" className="w-full object-cover " />
          {/* <h1 className="text-3xl font-bold text-primary">INTERIORS</h1> */}
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold text-primary">
            Book Your Appoinment
          </h1>
          <div className="inline-block">
            <Clink text="Get Started" href="/contact" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-normal text-primary">Location</h3>
            <p className="text-white text-base font-light">
              1st Floor, Skanda Shops & Spaces Building, Beside H.P. Petrol
              Bunk, Near D-Mart, Bellary Chowrasta, KURNOOL
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-primary">Links</h1>
        <div className="flex flex-col gap-1">
          {links.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className="text-white text-md font-semibold"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-primary">Support</h1>
        <div className="flex items-center   gap-2">
          <div>
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <a
            href="tel:+91-8143370375"
            className="text-white text-md font-normal"
          >
            +91-8143370375
          </a>
        </div>
        <div className="flex items-center   gap-2">
          <div>
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <a
            href="tel:+91-9014601768"
            className="text-white text-md font-normal"
          >
            +91-9014601768
          </a>
        </div>
        <div className="flex items-center  gap-2">
          <div>
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <a
            href="mailto:elitedentakcarekurnool@gmail.com"
            className="text-white text-md font-normal"
          >
            elitedentakcarekurnool@gmail.com
          </a>
        </div>
        <div className="flex items-center  gap-2">
          <div>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
          <a
            href="http://wa.me/918143370375"
            className="text-white text-md font-normal"
          >
            +91-8143370375
          </a>
        </div>

        <div className="flex items-center  gap-2">
          <div>
            <ion-icon name="logo-youtube"></ion-icon>
          </div>
          <a
            href="https://www.youtube.com/@ELITEDENTALCARE_KURNOOL"
            className="text-white text-md font-normal"
          >
            Elite Dental Care
          </a>
        </div>
        <div className="flex items-center  gap-2">
          <div>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <a
            href="https://www.instagram.com/_elite_dental_care?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            className="text-white text-md font-normal"
          >
            elite_dental_care{" "}
          </a>
        </div>
        <div className="flex items-center  gap-2">
          <div>
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61569676311948&mibextid=ZbWKwL"
            className="text-white text-md font-normal"
          >
            Elite Dental Care
          </a>
        </div>
      </div>
    </footer>
  );
}
