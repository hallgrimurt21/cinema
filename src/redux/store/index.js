import {configureStore} from "@reduxjs/toolkit"
import cinemaReducer from "../features/cinema/index"
import allCinemasReducer from "../features/allCinemas/index"
import allMoviesReducer from "../features/allMovies/index"
import authReducer from "../features/authSlice"

export const store = configureStore({
    reducer: {
        cinema: cinemaReducer,
        allCinemas: allCinemasReducer,
        allMovies: allMoviesReducer,
        auth: authReducer,
    },
})
