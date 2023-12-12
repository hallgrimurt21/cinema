import {configureStore} from "@reduxjs/toolkit"
import cinemaReducer from "./features/cinemaSlice"
import allCinemasReducer from "./features/allCinemasSlice"
import allMoviesReducer from "./features/allMoviesSlice"
import authReducer from "./features/authSlice"
import upcomingMoviesReducer from "./features/UpcomingMovies/upcomingMovies"

export const store = configureStore({
    reducer: {
        cinema: cinemaReducer,
        allCinemas: allCinemasReducer,
        allMovies: allMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        auth: authReducer,
    },
})
