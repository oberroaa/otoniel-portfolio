import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Languages />
      <Contact />
      <footer style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)", fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} Otoniel Berroa Arias • Miami, FL
      </footer>
    </div>
  );
}

export default App;
