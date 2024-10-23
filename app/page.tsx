//!--------------------------------------------------------------
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function Home() {
  // const [usuarios, setUsuarios] = useState([]);

  // useEffect(() => {
  //   const fetchUsuarios = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.BACKEND_URL}/usuarios`);
  //       setUsuarios(response.data);
  //     } catch (error) {
  //       console.error("Error al obtener usuarios:", error);
  //     }
  //   };

  //   fetchUsuarios();
  // }, []);
  return (
    <div>
      <h1>Usuarios</h1>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ul>
          <p>
            Luis <br />
          </p>
          {/* {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))} */}
        </ul>
      </div>
    </div>
  );
}
