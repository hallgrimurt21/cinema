import {configureStore} from "@reduxjs/toolkit"
import cinemasReducer from "./features/cinemasSlice"
import moviesReducer from "./features/moviesSlice"
import authReducer from "./features/authSlice"
import upcomingMoviesReducer from "./features/upcomingMovies"

export const store = configureStore({
    reducer: {
        cinemas: cinemasReducer,
        movies: moviesReducer,
        auth: authReducer,
        upcomingMovies: upcomingMoviesReducer,
    },
})
