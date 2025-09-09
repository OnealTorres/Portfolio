import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="gradient-bg h-auto">
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </main>
  );
}

export default App;
