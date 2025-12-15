import { motion } from "framer-motion";
import "../styles/components.css";
const data = [
  { title: "Proyecto 1", desc: "Descripción del proyecto." },
  { title: "Proyecto 2", desc: "Descripción del proyecto." },
  { title: "Proyecto 3", desc: "Descripción del proyecto." },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-container">Proyectos</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl shadow-xl backdrop-blur transform-gpu"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-white/80">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
