import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query: (comment) => ({
                url: `/comments`,
                method: 'POST',
                body: comment
            })
        }),
        getComment: builder.query({
            query: (id) => `/comments/${id}`
        }),

        getItinerariesComment: builder.query({
            query: (id) => `/comments/?itinerary=${id}`
        }),

        modifyComment: builder.mutation({
            query: (comment) => ({
                url: `/comments/${comment._id}`,
                method: 'PATCH',
                body: comment
            })
        }),

        deleteComment: builder.mutation({
            query: (comment) => ({
                url: `/comment/${comment._id}`,
                method: 'DELETE',
                body: comment
            })
        })
    })
})

export const {
    useCreateCommentMutation, useGetAllCommentsQuery, useDeleteCommentMutation, useModifyCommentMutation, useGetItinerariesCommentQuery
} = commentsAPI
