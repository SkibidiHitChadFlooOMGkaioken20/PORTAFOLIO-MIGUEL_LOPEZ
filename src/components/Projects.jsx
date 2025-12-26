import { motion } from "framer-motion";
import "../styles/components.css"; // Asegúrate de que la ruta es correcta
import { link } from "framer-motion/client";

const data = [
  { title: "Asistente Personal App", desc: "Aplicación de asistente personal en desarrollo en Kotlin para android" },
  { title: "Web de investigacion", desc: "Pagina de invesigación sobre el patrón de arquitectura MVVM.", link:"https://skibidihitchadflooomgkaioken20.github.io/ReactConRest-GraphQL-ECS/" },
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