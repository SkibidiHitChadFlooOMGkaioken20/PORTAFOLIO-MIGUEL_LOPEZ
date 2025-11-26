import MainLayout from '../components/MainLayout.astro';
export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-bold mb-2">Portafolio Astro</h3>
          <p>Mi primer portafolio usando Astro + React + Tailwind CSS.</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-bold mb-2">Proyecto Demo</h3>
          <p>Aplicación de prueba con funcionalidades de ejemplo.</p>
        </div>
      </div>
    </section>
  );
}