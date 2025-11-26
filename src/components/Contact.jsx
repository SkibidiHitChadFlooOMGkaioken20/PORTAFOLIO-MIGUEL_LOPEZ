import MainLayout from '../components/MainLayout.astro';
export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p>Email: miguel@example.com</p>
      <p>GitHub: <a href="https://github.com/SkibidiHitChadFlooOMGkaioken20" className="text-blue-500 hover:underline">SkibidiHitChadFlooOMGkaioken20</a></p>
    </section>
  );
}