import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="text-gray-300 max-w-3xl leading-relaxed text-lg">
          Soy un desarrollador apasionado por crear interfaces modernas,
          rápidas y funcionales utilizando tecnologías como Astro, React,
          TailwindCSS y JavaScript. Me gusta convertir ideas en productos reales.
        </p>
      </motion.div>
    </section>
  );
}