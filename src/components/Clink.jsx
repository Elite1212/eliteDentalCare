import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Clink({ text, href }) {
  return (
    <Link
      to={href}
      className="bg-primary px-4 py-2 rounded-md sm:px-6 cursor-pointer center text-bg text-xl font-bold inline-block"
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      {text}
    </Link>
  );
}

Clink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired, // Add this line
};
