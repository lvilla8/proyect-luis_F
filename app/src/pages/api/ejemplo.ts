// import axios from "axios";
// import type { NextApiRequest, NextApiResponse } from "next";

// const backendUrl = process.env.BACKEND_URL;

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const response = await axios.get(`${backendUrl}/tu-endpoint`);
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al conectar con el backend" });
//   }
// };
