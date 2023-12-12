import {configureStore} from "@reduxjs/toolkit"
import cinemasReducer from "./features/cinemasSlice"
import moviesReducer from "./features/moviesSlice"
import authReducer from "./features/authSlice"

export const store = configureStore({
    reducer: {
        cinemas: cinemasReducer,
        movies: moviesReducer,
        auth: authReducer,
    },
})
