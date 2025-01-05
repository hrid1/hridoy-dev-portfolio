import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="max-w-screen-2xl">
      <Hero></Hero>
      <AboutMe />
      <Projects />
      <Skill />
      <Education />
      <ContactForm/>
    </div>
  );
}

export default App;
