// src/redux/store/index.js
import {configureStore} from "@reduxjs/toolkit"
import cinemaReducer from "../features/cinema/index"
import allCinemasReducer from "../features/allCinemas/index"
import allMoviesReducer from "../features/allMovies/index"

export const store = configureStore({
    reducer: {
        cinema: cinemaReducer,
        allCinemas: allCinemasReducer,
        allMovies: allMoviesReducer,
    },
})

export default store
