import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <MantineProvider>
      <div className="flex h-auto w-auto bg-gray-50">
        <main className="gradient-bg h-auto">
          <Navbar />
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Connect />
          <Footer />
        </main>
      </div>
    </MantineProvider>
  );
}

export default App;
