"use client";

import { useEffect, useState } from "react";

type Prestamos = {
  id: number;
  libro_id: number;
  fecha_prestamos: string;
  fecha_devolucion: string;
};

const Prestamo = () => {
  const [prestamos, setPrestamos] = useState<Prestamos[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrestamo = async () => {
      try {
        const response = await fetch("http://localhost:3001/prestamos/get");
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setPrestamos(result);
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

    fetchPrestamo();
  }, []);

  return (
    <div>
      <h1>
        {" "}
        <br />
        Prestamos:
      </h1>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Prestamos del Backend</h1>
        {error && <p>Error: {error}</p>}
        {prestamos.length > 0 ? (
          <ul>
            {prestamos.map((prestamo) => (
              <li key={prestamo.id}>
                ID: {prestamo.id}, Libro Id: {prestamo.libro_id},
                Fecha_prestamos: {prestamo.fecha_prestamos}, Fecha_devolucion:{" "}
                {prestamo.fecha_devolucion}
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

export default Prestamo;
