import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const itinerariesAPI = createApi({
  reducerPath: "itinerariesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    getAllItineraries: builder.query({
      query: () => `/itineraries/`,
    }),
    getOneItinerary: builder.query({
      query: (id) => `/itineraries/${id}`,
    }),
    getCityItineraries: builder.query({
      query: (id) => ({
        url: `/itineraries/?city=${id}`,
        method: "GET",
      }),
      transformResponse: (response) => response.response
    }),
    getItinerariesUsers: builder.query({
      query: (id) => ({
        url: `/itineraries/?user=${id}`,
        method: "GET",
      }),
      transformResponse: (response) => response.response
    }),
    postOneItinerary: builder.mutation({
      query: (itinerary) => ({
        url: "/itineraries/",
        method: "POST",
        body: itinerary,
      })
    }),
    modifyItinerary: builder.mutation({
      query: (id, data) => ({
        url: `/itineraries/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteItinerary: builder.mutation({
      query: (id) => ({
        url: `/itineraries/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetAllItinerariesQuery,
  useGetOneItineraryQuery,
  useGetItinerariesUsersQuery,
  useDeleteItineraryMutation,
  useModifyItineraryMutation,
  useGetCityItinerariesQuery,
  usePostOneItineraryMutation
} = itinerariesAPI;
