import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const activitiesAPI = createApi({
  reducerPath: "activitiesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000"
  }),
  endpoints: (builder) => ({
    createActivity: builder.mutation({
      query: (activity) => ({
        url: `/activities`,
        method: 'POST',
        body: activity
      })
    }),
    getActivity: builder.query({
      query: (id) => `/activities/${id}`
    }),
    getAllActivities: builder.query({
      query: () => `/activities/`
    }),
    getItineraryActivities: builder.query({
      query: (id) => ({
        url: `/activities/?itinerary=${id}`,
        method: "GET",
      }),
      transformResponse: (response) => response.response
    }),
    modifyActivity: builder.mutation({
      query: (activity) => ({
        url: `/activities/${activity._id}`,
        method: 'PATCH',
        body: activity
      })
    }),
    deleteActivity: builder.mutation({
      query: (activity) => ({
        url: `/activities/${activity._id}`,
        method: 'DELETE',
        body: activity
      })
    })
  })
})
export const {
  useCreateActivityMutation,
  useDeleteActivityMutation, useGetActivityQuery,
  useGetAllActivitiesQuery,
  useGetItineraryActivitiesQuery
} = activitiesAPI