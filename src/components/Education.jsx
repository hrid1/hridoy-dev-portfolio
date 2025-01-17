import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section className="py-8" id="education">
      <h2 className="mb-4 text-center text-3xl font-bold pt-8" >Education</h2>
      <div>
        {EDUCATION.map((edu, idx) => (
          <div key={{ idx }} className="mb-6 p-10">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
