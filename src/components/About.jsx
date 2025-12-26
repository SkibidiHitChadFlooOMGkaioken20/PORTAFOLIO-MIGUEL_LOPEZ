import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Heart } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formación",
    description: "Estudiante de 2º de DAM con sólida base en desarrollo multiplataforma"
  },
  {
    icon: Code2,
    title: "Experiencia",
    description: "100+ horas de práctica en proyectos personales y académicos"
  },
  {
    icon: Briefcase,
    title: "Objetivo",
    description: "Busco mi primera oportunidad profesional como desarrollador junior"
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Autodidacta constante, siempre aprendiendo nuevas tecnologías"
  }
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Sobre mí</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Desarrollador junior apasionado por crear soluciones tecnológicas
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="about-text-section"
        >
          <div className="about-image-placeholder">
            <div className="about-avatar">
              {/* Puedes poner tu foto aquí */}
              <img 
                src="/public/images/fotoperfil.png"
                alt="fotoperfil"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="font-size: 4rem;">👨‍💻</div>';
                }}
              />
            </div>
          </div>

          <div className="about-text">
            <h3 className="text-2xl font-bold mb-4 text-white">
              ¡Hola! Soy Miguel López
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Actualmente estoy en mi segundo año de <strong className="text-white">Desarrollo de Aplicaciones Multiplataforma (DAM)</strong>, 
                donde he adquirido sólidos conocimientos en programación, desarrollo web y gestión de bases de datos.
              </p>
              
              <p>
                Me caracterizo por ser una persona <strong className="text-white">responsable, organizada y con gran capacidad 
                de trabajo en equipo</strong>. Mi mayor fortaleza es mi motivación constante y mi rápida capacidad de 
                aprendizaje, lo que me permite adaptarme rápidamente a nuevas tecnologías y desafíos.
              </p>
              
              <p>
                Fuera del horario académico, dedico mi tiempo a desarrollar proyectos personales que me permiten 
                aplicar y expandir mis conocimientos. Estoy especialmente interesado en el <strong className="text-white">desarrollo 
                full-stack</strong> y en crear experiencias de usuario intuitivas y atractivas.
              </p>
              
              <p>
                Busco activamente una oportunidad para <strong className="text-white">iniciar mi carrera profesional como 
                desarrollador</strong> donde pueda aplicar mis conocimientos técnicos, seguir aprendiendo y contribuir 
                al éxito de proyectos reales en un entorno profesional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="about-highlights-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="about-highlight-card"
            >
              <div className="about-highlight-icon">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="about-highlight-title">{item.title}</h4>
              <p className="about-highlight-description">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Valores personales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="about-values-section"
        >
          <h3 className="text-xl font-bold text-center mb-6 text-white">
            Valores que me definen
          </h3>
          <div className="about-values-grid">
            <div className="about-value-item">💡 Innovación</div>
            <div className="about-value-item">🎯 Compromiso</div>
            <div className="about-value-item">🚀 Proactividad</div>
            <div className="about-value-item">🤝 Trabajo en equipo</div>
            <div className="about-value-item">📚 Aprendizaje continuo</div>
            <div className="about-value-item">✨ Atención al detalle</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Estilos adicionales para About - Agregar al components.css */
/*

.about-text-section {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: start;
}

.about-image-placeholder {
  position: sticky;
  top: 6rem;
}

.about-avatar {
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
}

.about-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-text {
  padding-top: 1rem;
}

.about-highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.about-highlight-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 200ms ease;
}

.about-highlight-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}

.about-highlight-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: white;
}

.about-highlight-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.about-highlight-description {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
}

.about-values-section {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.about-values-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.about-value-item {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: #cbd5e1;
  font-size: 0.875rem;
  transition: all 150ms ease;
}

.about-value-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-text-section {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .about-image-placeholder {
    position: static;
    margin: 0 auto;
  }
  
  .about-avatar {
    margin: 0 auto;
  }
}

*/