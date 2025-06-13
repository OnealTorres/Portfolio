import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="gradient-bg h-auto">
      <Navbar />
      <Intro />
      <About />
    </main>
  );
}

export default App;
