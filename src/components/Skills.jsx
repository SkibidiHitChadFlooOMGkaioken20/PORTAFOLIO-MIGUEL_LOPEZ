import { motion } from "framer-motion";
import "../styles/components.css";
const skills = ["JavaScript", "React", "Astro", "TailwindCSS", "Node.js", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-container">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl shadow-xl backdrop-blur transform-gpu text-center text-lg font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}