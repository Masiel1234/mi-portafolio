'use client'
export default function FrontendPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-4xl font-bold mb-4">Frontend</h1>
      <p className="mb-6">
        Aquí están mis habilidades en desarrollo frontend. Me enfoco en crear interfaces atractivas, accesibles y optimizadas para el usuario.
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>React / Next.js</li>
        <li>Tailwind CSS</li>
        <li>HTML5 / CSS3 / JavaScript</li>
        <li>Accesibilidad (WAI-ARIA)</li>
        <li>Consumo de APIs REST y GraphQL</li>
      </ul>
    </main>
  );
}
