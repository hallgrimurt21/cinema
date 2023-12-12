import {configureStore} from "@reduxjs/toolkit"
import cinemaReducer from "../features/cinema/index"
import allCinemasReducer from "../features/allCinemas/index"
import allMoviesReducer from "../features/allMovies/index"
import authReducer from "../features/authSlice"
import upcomingMoviesReducer from "../features/UpcomingMovies/upcomingMovies"

export const store = configureStore({
    reducer: {
        cinema: cinemaReducer,
        allCinemas: allCinemasReducer,
        allMovies: allMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        auth: authReducer,
    },
})
