import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // OPCIÓN 1: Usar FormSubmit (sin configuración backend)
      const response = await fetch("https://formsubmit.co/ajax/miguellv2005@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name}`,
          _captcha: "false" // Desactiva el captcha de FormSubmit
        })
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado con éxito! Te responderé pronto."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "miguellv2005@gmail.com",
      href: "mailto:miguellv2005@gmail.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+34 622 774 069",
      href: "tel:+34 622 774 069"
    },
    {
      icon: MapPin,
      label: "Orihuela",
      value: "Alicante, España",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title contact-title">Hablemos</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme
        </p>
      </motion.div>

      <div className="contact-container">
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-info-section"
        >
          <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
          <p className="text-gray-400 mb-8">
            Estoy disponible para oportunidades laborales, proyectos freelance o simplemente para charlar sobre tecnología.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disponibilidad */}
          <div className="mt-8 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="font-medium">Disponible para nuevos proyectos</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Tiempo de respuesta: 24-48 horas
            </p>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="¿Sobre qué quieres hablar?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="contact-input contact-textarea"
                placeholder="Cuéntame sobre tu proyecto o idea..."
              />
            </div>

            {/* Mensaje de estado */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`status-message ${status.type === "success" ? "status-success" : "status-error"}`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{status.message}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="contact-button"
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* 
INSTRUCCIONES PARA ACTIVAR EL FORMULARIO:

1. OPCIÓN FÁCIL - FormSubmit (ya implementado):
   - Cambia "tuemail@example.com" por tu email real en la línea del fetch
   - La primera vez que alguien envíe el form, recibirás un email de confirmación
   - ¡Y ya está! No necesitas backend

2. OPCIÓN ALTERNATIVA - EmailJS:
   - Regístrate gratis en https://www.emailjs.com/
   - Instala: npm install @emailjs/browser
   - Reemplaza el código del fetch con EmailJS
   - Sigue su documentación para configurarlo

3. OPCIÓN BACKEND PROPIO:
   - Crea tu propia API con Node.js + Nodemailer
   - Cambia la URL del fetch por tu endpoint
*/