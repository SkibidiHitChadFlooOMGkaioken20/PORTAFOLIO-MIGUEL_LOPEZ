
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SkibidiHitChadFlooOMGkaioken20", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/miguel-lópez-b3a85339a", label: "LinkedIn" },
    { icon: Mail, href: "miguellv2005@gmail.com", label: "Email" },
    { icon: FileText, href: "/cv.pdf", label: "CV", download: true }
  ];

  return (
    <section className="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        {/* Badge de disponibilidad */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-green-400 font-medium">Disponible para trabajar</span>
        </motion.div>

        <h1 className="hero-title">
          Hola, soy <span className="hero-gradient-text">Miguel López</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-subtitle"
        >
          Desarrollador Full Stack Junior especializado en desarrollo app y web moderno
          con tecnologías como Java & Kotlin, JavaScript (React), Astro.
        </motion.p>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button"
            href="#projects"
          >
            Ver Proyectos
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button"
            href="#contact"
          >
            Contactar
          </motion.a>
        </motion.div>

        {/* Links sociales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.download ? undefined : "_blank"}
              rel={social.download ? undefined : "noopener noreferrer"}
              download={social.download}
              whileHover={{ y: -3 }}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}