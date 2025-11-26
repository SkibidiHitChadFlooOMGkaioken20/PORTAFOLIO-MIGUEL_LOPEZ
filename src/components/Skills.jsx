import MainLayout from '../components/MainLayout.astro';
export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <li className="bg-white shadow p-4 rounded">Java</li>
        <li className="bg-white shadow p-4 rounded">Kotlin</li>
        <li className="bg-white shadow p-4 rounded">C#</li>
        <li className="bg-white shadow p-4 rounded">Python</li>
        <li className="bg-white shadow p-4 rounded">JavaScript</li>
        <li className="bg-white shadow p-4 rounded">React</li>
        <li className="bg-white shadow p-4 rounded">MySQL</li>
        <li className="bg-white shadow p-4 rounded">GitHub</li>
      </ul>
    </section>
  );
}