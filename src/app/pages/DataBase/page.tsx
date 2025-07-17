'use client'
export default function DatabasePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-4xl font-bold mb-4">Base de Datos</h1>
      <p className="mb-6">
        Tengo experiencia trabajando con bases de datos relacionales y no relacionales, manteniendo integridad y seguridad de los datos.
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>MySQL / PostgreSQL</li>
        <li>MongoDB</li>
        <li>ORMs: Prisma / Sequelize / Eloquent</li>
        <li>Modelado de datos eficiente</li>
        <li>Consultas SQL avanzadas</li>
      </ul>
    </main>
  );
}
