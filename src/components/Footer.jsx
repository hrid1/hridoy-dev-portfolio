import { Link } from "react-router-dom";
import logo from "../assets/hrlogo2.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <img className="w-20 mb-6" src={logo} alt="Portfolio Logo" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, idx) => (
          <Link
            key={idx}
            to={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.name}`}
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; {new Date().getFullYear()} Portfolio Site. Developed by Hridoy
        Shil.
      </p>
    </div>
  );
};

export default Footer;
