"use client";

import { useEffect, useState } from "react";

type Libros = {
  id: number;
  titulo: string;
  autor_id: number;
  genero: string;
  stock: number;
};

const Libro = () => {
  const [libros, setLibros] = useState<Libros[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLibro = async () => {
      try {
        const response = await fetch("http://localhost:3001/libros/get");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setLibros(result);
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

    fetchLibro();
  }, []);

  return (
    <div>
      <h1>
        {" "}
        <br />
        Libros:
      </h1>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Libros del Backend</h1>
        {error && <p>Error: {error}</p>}
        {libros.length > 0 ? (
          <ul>
            {libros.map((libro) => (
              <li key={libro.id}>
                ID: {libro.id}, Titulo: {libro.titulo}, Genero: {libro.genero},
                Stock: {libro.stock}, Autor: {libro.autor_id}
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

export default Libro;
