"use client";

import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  prestamos_id: number;
};

export default function Home() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch("http://localhost:3001/usuarios/get");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setUsuarios(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error desconocido");
        }
        console.error("Error al obtener los datos:", error);
        console.log("no obtiene datos");
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div>
      <h1>
        {" "}
        <br />
        Practica:
      </h1>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Usuarios del Backend</h1>
        {error && <p>Error: {error}</p>}
        {usuarios.length > 0 ? (
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario.id}>
                ID: {usuario.id}, Nombre: {usuario.nombre}, Email:{" "}
                {usuario.email}, Edad: {usuario.edad}, Prestamos ID:{" "}
                {usuario.prestamos_id}
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
