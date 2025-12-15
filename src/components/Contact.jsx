import { motion } from "framer-motion";
import "../styles/components.css";
export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="text-4xl font-bold mb-6">Contacto</h2>

      <form className="max-w-xl space-y-4">
        <input
          className="w-full bg-white/10 border border-white/20 p-3 rounded-lg"
          placeholder="Tu nombre"
        />

        <input
          className="w-full bg-white/10 border border-white/20 p-3 rounded-lg"
          placeholder="Tu email"
        />

        <textarea
          className="w-full bg-white/10 border border-white/20 p-3 rounded-lg"
          rows="5"
          placeholder="Mensaje"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg"
        >
          Enviar
        </motion.button>
      </form>
    </section>
  );
}
