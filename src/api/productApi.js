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
    postComment: builder.mutation({
      query: ({ id, username, comment }) => ({
        url: `/products/${id}/comments`,
        method: 'POST',
        body: { username, comment },
      }),
    }),

    
  })
})

export const { useGetAllProductsQuery, useGetCommentsQuery, usePostCommentMutation } = ProductsApi;

