import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section>
            <h3>Proyectos</h3>

            <ul>
                {projects.map((p, i) => (
                    <li key={i}>
                        <strong>{p.title}</strong><br />
                        <em>{p.tech}</em>
                        <p>{p.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
