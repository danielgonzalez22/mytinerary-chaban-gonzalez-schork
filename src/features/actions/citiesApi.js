import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000"
  }),

  endpoints: (builder) => ({
    getAllCities: builder.query({
      query: (city) => ({
        url: `/cities/?city=${city}`,
        method: "GET",
      }),
      transformResponse: (response) => response.response
    }),

    postOneCity: builder.mutation({
      query: (data) => ({
        url: "/cities/",
        method: "POST",
        body: data,
      })
    }),

    editOneCity: builder.mutation({
      query: ({ id, data }) => ({
        url: `/cities/${id}`,
        method: "PUT",
        body: data,
      })
    }),

    getOneCity: builder.query({
      query: (id) => `/cities/${id}`
    })
  })
})

export const {
  useGetAllCitiesQuery,
  usePostOneCityMutation,
  useEditOneCityMutation,
  useGetOneCityQuery } = citiesAPI