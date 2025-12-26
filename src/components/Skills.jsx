import { motion } from "framer-motion";
import "../styles/components.css";

const skillsByCategory = [
  {
    title: "Lenguajes de programación",
    skills: ["Java", "Kotlin", "C"]
  },
  {
    title: "Bases de datos",
    skills: ["MySQL", "SQLite"]
  },
  {
    title: "Desarrollo web",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Astro", "TailwindCSS"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title skills-title">Skills</h2>

      {skillsByCategory.map((category, index) => (
        <div key={index} className="skills-category">
          <h3 className="skills-subtitle">{category.title}</h3>

          <div className="skills-grid">
            {category.skills.map((skill, i) => (
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
        </div>
      ))}
    </section>
  );
}