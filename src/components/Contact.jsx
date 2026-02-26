export default function Contact() {
    return (
        <section id="contact" style={{ textAlign: "center" }}>
            <h3>¿Hablamos?</h3>
            <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <p style={{ marginBottom: "2rem", color: "var(--text-muted)" }}>
                    Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <a href="mailto:oberroaa@gmail.com" className="pill" style={{ padding: "1rem", fontSize: "1.1rem" }}>
                        Enviar Email: oberroaa@gmail.com
                    </a>
                    <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem" }}>
                        <a href="https://linkedin.com/in/otoniel-berroa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/oberroaa" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
