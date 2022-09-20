import { configureStore } from "@reduxjs/toolkit"
import { activitiesAPI } from "./actions/activitiesApi"
import { citiesAPI } from "./actions/citiesApi"
import { commentsAPI } from "./actions/commentsApi"
import { itinerariesAPI } from "./actions/itinerariesApi"
import { usersAPI } from "./actions/usersApi"


export const store = configureStore({
  reducer: {
    cities: citiesAPI,
    [citiesAPI.reducerPath]: citiesAPI.reducer,

    itineraries: itinerariesAPI,
    [itinerariesAPI.reducerPath]: itinerariesAPI.reducer,

    comments: commentsAPI,
    [commentsAPI.reducerPath]: commentsAPI.reducer,

    activities: activitiesAPI,
    [activitiesAPI.reducerPath]: activitiesAPI.reducer,

    users: usersAPI,
    [usersAPI.reducerPath]: usersAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    inmutableCheck: false,
    serializableCheck: false,
  })
})
