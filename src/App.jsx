import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <LanguageProvider>
      <motion.div 
        className="app-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Contact />
        <Footer />
      </motion.div>
    </LanguageProvider>
  );
}

export default App;


