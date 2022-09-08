import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

let carousel = createApi({
    reducerPath: "carousel", baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000"}),
    endpoints: (builder) =>({
        carousel:builder.query({
            query: ()=> `/cities`
})
})
})

export default carousel
export const {useCarouselQuery} = carousel