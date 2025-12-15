import { motion } from "framer-motion";
import "../styles/components.css";
export default function Hero() {
  return (
    <section className="section-container">
      <div className="section-container"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Bienvenido a mi <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Portafolio</span>
        </h1>

        <p className="section-container">
          Soy un desarrollador enfocado en crear experiencias web modernas, fluidas y potentes.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          className="section-container"
          href="#projects"
        >
          Ver Proyectos
        </motion.a>
      </motion.div>
    </section>
  );
}
