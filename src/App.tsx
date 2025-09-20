import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="gradient-bg h-auto">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
