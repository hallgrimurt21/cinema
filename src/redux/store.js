import {configureStore} from "@reduxjs/toolkit"
<<<<<<< HEAD:src/redux/store/index.js
import cinemaReducer from "../features/cinema/index"
import allCinemasReducer from "../features/allCinemas/index"
import allMoviesReducer from "../features/allMovies/index"
import authReducer from "../features/authSlice"
import upcomingMoviesReducer from "../features/UpcomingMovies/index"
=======
import cinemaReducer from "./features/cinemaSlice"
import allCinemasReducer from "./features/allCinemasSlice"
import allMoviesReducer from "./features/allMoviesSlice"
import authReducer from "./features/authSlice"
>>>>>>> 95dc780d3f766801730c3eb18d17ed612ff78e20:src/redux/store.js

export const store = configureStore({
    reducer: {
        cinema: cinemaReducer,
        allCinemas: allCinemasReducer,
        allMovies: allMoviesReducer,
        upcomingMovies: upcomingMoviesReducer,
        auth: authReducer,
    },
})
