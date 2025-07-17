'use client'
export default function BackendPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-10">
      <h1 className="text-4xl font-bold mb-4">Backend</h1>
      <p className="mb-6">
        En la parte del servidor, desarrollo lógicas seguras y eficientes para manejar los datos y procesos de las aplicaciones.
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>Node.js / Express</li>
        <li>PHP / Laravel</li>
        <li>Autenticación y autorización (JWT, sesiones)</li>
        <li>REST API y GraphQL</li>
        <li>Pruebas con Jest / Mocha</li>
      </ul>
    </main>
  );
}
