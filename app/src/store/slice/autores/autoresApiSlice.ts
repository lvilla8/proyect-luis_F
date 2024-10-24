import { Autor } from "@/app/src/domain/autores/index";
import { apiSlice } from "../apiSlice";

export const autorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAutor: builder.query<Autor[], string>({
      query: () => "/api/bancos",
    }),
    getAutorById: builder.query<Autor, number>({
      query: (id) => `/api/bancos/${id}`,
    }),
    createAutor: builder.mutation<Autor, Partial<Autor>>({
      query: (body) => ({
        url: "/api/bancos",
        method: "POST",
        body,
      }),
    }),
    updateAutor: builder.mutation<Autor, Partial<Autor>>({
      query: (body) => ({
        url: `/api/bancos/${body.id_banco}`,
        method: "PUT",
        body,
      }),
    }),
    deleteAutor: builder.mutation<Autor, number>({
      query: (id) => ({
        url: `/api/bancos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllAutorQuery,
  useGetAutorByIdQuery,
  useUpdateAutorMutation,
  useDeleteAutorMutation,
  useCreateAutorMutation,
} = autorApi;
