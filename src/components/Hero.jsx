import { HERO } from "../constants";
import carlImg from "../assets/carl.jpeg";

const Hero = () => {
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
