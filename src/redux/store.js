import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./features/authSlice"
import cinemasReducer from "./features/cinemasSlice"
import dropDownReducer from "./features/dropDownSlice"
import genresReducer from "./features/genresSlice"
import moviesReducer from "./features/moviesSlice"
import searchReducer from "./features/searchSlice"
import toggle from "./features/toggle"
import trailerReducer from "./features/trailerSlice"
import upcomingMoviesReducer from "./features/upcomingMovies"
import visibilityReducer from "./features/visibilitySlice"
import similarReducer from "./features/similarSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cinemas: cinemasReducer,
        dropDown: dropDownReducer,
        genres: genresReducer,
        movies: moviesReducer,
        search: searchReducer,
        similar: similarReducer,
        toggle: toggle,
        trailer: trailerReducer,
        upcomingMovies: upcomingMoviesReducer,
        visibility: visibilityReducer,
    },
})
