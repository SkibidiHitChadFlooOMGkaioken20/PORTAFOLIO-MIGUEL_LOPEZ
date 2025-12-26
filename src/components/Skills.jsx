import { motion } from "framer-motion";
import "../styles/components.css"; // Asegúrate de que la ruta es correcta

const skills = ["JavaScript", "React", "Astro", "TailwindCSS", "Node.js", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="skill-card"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}