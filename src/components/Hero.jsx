import MainLayout from '../components/MainLayout.astro';
export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Hola, soy Miguel López</h1>
      <p className="text-xl mb-6">Estudiante de DAM y desarrollador de aplicaciones multiplataforma.</p>
      <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Ver Proyectos</a>
    </section>
  );
}