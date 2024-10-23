// // pages/api/usuarios.ts
// import type { NextApiRequest, NextApiResponse } from 'next';

// const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       // Obtener todos los usuarios
//       const responseGet = await fetch(`${BACKEND_URL}/usuarios`);
//       const usuarios = await responseGet.json();
//       res.status(responseGet.status).json(usuarios);
//       break;
    
//     case 'POST':
//       // Crear un nuevo usuario
//       const responsePost = await fetch(`${BACKEND_URL}/usuarios`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(req.body),
//       });
//       const nuevoUsuario = await responsePost.json();
//       res.status(responsePost.status).json(nuevoUsuario);
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
