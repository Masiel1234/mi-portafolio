'use client'
import Button from '../app/components/button';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Mi Portafolio</h1>
      <p className="text-gray-600">Explora mis habilidades</p>

      <div className="flex gap-4 mt-4">
        <Button to="/pages/FrontEnd">Frontend</Button>
        <Button to="/pages/BackEnd">Backend</Button>
        <Button to="/pages/DataBase">Base de Datos</Button>
      </div>
    </main>
  );
}
