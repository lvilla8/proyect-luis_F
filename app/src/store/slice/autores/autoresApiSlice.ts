// import { Bank } from "../../../domain/bank";
// import { apiSlice } from "../apiSlice";

// export const bankApi = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllBanks: builder.query<Bank[], string>({
//       query: () => "/api/bancos",
//     }),
//     getBankById: builder.query<Bank, number>({
//       query: (id) => `/api/bancos/${id}`,
//     }),
//     createBank: builder.mutation<Bank, Partial<Bank>>({
//       query: (body) => ({
//         url: "/api/bancos",
//         method: "POST",
//         body,
//       }),
//     }),
//     updateBank: builder.mutation<Bank, Partial<Bank>>({
//       query: (body) => ({
//         url: `/api/bancos/${body.id_banco}`,
//         method: "PUT",
//         body,
//       }),
//     }),
//     deleteBank: builder.mutation<Bank, number>({
//       query: (id) => ({
//         url: `/api/bancos/${id}`,
//         method: "DELETE",
//       }),
//     }),
//   }),
// });

// export const {
//   useGetAllBanksQuery,
//   useGetBankByIdQuery,
//   useUpdateBankMutation,
//   useDeleteBankMutation,
//   useCreateBankMutation,
// } = bankApi;


//! se implementas las api del backend