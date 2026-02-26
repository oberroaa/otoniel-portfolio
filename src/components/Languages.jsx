export default function Languages() {
    return (
        <section id="languages">
            <h3>Idiomas</h3>
            <div className="grid">
                <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                    <h4 style={{ color: "var(--accent-primary)" }}>Español</h4>
                    <p>Nativo</p>
                </div>
                <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                    <h4 style={{ color: "var(--accent-primary)" }}>Inglés</h4>
                    <p style={{ fontSize: "0.9rem" }}>Básico / Técnico</p>
                </div>
            </div>
        </section>
    );
}
