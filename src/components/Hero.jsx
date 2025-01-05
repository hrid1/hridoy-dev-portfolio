import { HERO } from "../constants";
import carlImg from "../assets/carl.jpeg";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  const social_Links = [
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];
  return (
    <section>
      <div className="flex min-h-screen  flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
            {HERO.name}
          </h2>
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {HERO.greet}
          </p>
          <p className="mb-8 p-2 text-xl">{HERO.description}</p>

          <div className="flex items-center px-2 gap-8 mb-8 md:mb-4">
            {social_Links.map((link, idx) => (
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
        </div>
        {/* img */}
        <div>
          <div className="flex justify-center">
            <img
              width={550}
              height={550}
              src={carlImg}
              alt="profile"
              className=" rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
