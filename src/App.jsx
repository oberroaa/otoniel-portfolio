import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;


