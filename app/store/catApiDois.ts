import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Breed } from '../types/Tipos'

export const catApiDois = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1' }),
  endpoints: (builder) => ({
    getBreeds: builder.query<Breed[], void>({
      query: () => '/breeds',
    }),
    getBreedById: builder.query<Breed, string>({
      query: (id) => `/breeds/${id}`,
    }),
  }),
});

export const { useGetBreedsQuery, useGetBreedByIdQuery } = catApiDois;