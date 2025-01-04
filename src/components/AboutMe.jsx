import React from "react";
import { BIO } from "../constants";

const AboutMe = () => {
  console.log(BIO);
  return (
    <section className="flex max-w-6xl mx-auto flex-col gap-12 pt-16" id="bio">
      <h2 className="text-center text-3xl lg:text-4xl">ABOUT ME</h2>
      <div>
        {BIO.map((bio, idx) => (
          <p key={idx} className="mb-4 text-lg lg:text-xl">
            {bio}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
