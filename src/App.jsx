import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Skills />
        <About />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
