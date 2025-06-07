import { lazy, Suspense, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main role="main">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
      
      <Projects />
      <Contact />
      <Footer />

      {showTop && (
        <button
          onClick={() => scroll.scrollToTop({ duration: 500 })}
          className="back-to-top"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </main>
  );
};

export default App;