import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
  tagTypes: ['products'],
  reducerPath: 'ProductsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
      
    }),
    ///products/{id}/comments
    getComments: builder.query({
      query: (id) => `/products/${id}/comments`,
    }),
    
  })
})

export const { useGetAllProductsQuery , useGetCommentsQuery } = ProductsApi;

