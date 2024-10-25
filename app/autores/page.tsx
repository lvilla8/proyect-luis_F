"use client";

import { useEffect, useState } from "react";

type Autores = {
  id: number;
  nombre: string;
  nacionalidad: string;
};

const Autor = () => {
  const [autores, setAutores] = useState<Autores[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAutor = async () => {
      try {
        const response = await fetch("http://localhost:3001/autores/get");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setAutores(result);
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

    fetchAutor();
  }, []);

  return (
    <div>
      <h1>
        {" "}
        <br />
        Autores:
      </h1>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Autores del Backend</h1>
        {error && <p>Error: {error}</p>}
        {autores.length > 0 ? (
          <ul>
            {autores.map((autor) => (
              <li key={autor.id}>
                ID: {autor.id}, Nombre: {autor.nombre}, Nacionalidad:{" "}
                {autor.nacionalidad}
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Autor;
