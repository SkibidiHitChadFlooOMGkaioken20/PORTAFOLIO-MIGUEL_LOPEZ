import { motion } from "framer-motion";
import "../styles/components.css"; // Asegúrate de que la ruta es correcta

const data = [
  { title: "Proyecto 1", desc: "Descripción del proyecto." },
  { title: "Proyecto 2", desc: "Descripción del proyecto." },
  { title: "Proyecto 3", desc: "Descripción del proyecto." },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title projects-title">Proyectos</h2>

      <div className="projects-grid">
        {data.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="project-card"
          >
            <h3 className="project-card-title">{p.title}</h3>
            <p className="project-card-description">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}