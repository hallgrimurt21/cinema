import {configureStore} from "@reduxjs/toolkit"
import cinemasReducer from "./features/cinemasSlice"
import moviesReducer from "./features/moviesSlice"
import authReducer from "./features/authSlice"
import upcomingMoviesReducer from "./features/upcomingMovies"
import visibilityReducer from "./features/visibilitySlice"
import modalReducer from "./features/modalSlice"
import isMountedReducer from "./features/isMountedSlice"
import trailerReducer from "./features/trailerSlice"

export const store = configureStore({
    reducer: {
        cinemas: cinemasReducer,
        movies: moviesReducer,
        auth: authReducer,
        upcomingMovies: upcomingMoviesReducer,
        visibility: visibilityReducer,
        isMounted: isMountedReducer,
        trailer: trailerReducer,
        modal: modalReducer,
    },
})
