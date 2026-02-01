import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Languages from "./components/Languages";

function App() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <Header />
      <Projects />
      <Languages />
      <Contact />
    </main>
  );
}

export default App;
