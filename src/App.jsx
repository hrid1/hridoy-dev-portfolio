import AboutMe from "./components/AboutMe";
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
    </div>
  );
}

export default App;
