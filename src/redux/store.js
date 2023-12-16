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

export const store = configureStore({
    reducer: {
        auth: authReducer, // add auth reducer to the redux store
        cinemas: cinemasReducer, // add cinemas reducer to the redux store
        dropDown: dropDownReducer, // add dropDown reducer to the redux store
        genres: genresReducer, // add genres reducer to the redux store
        movies: moviesReducer, // add movies reducer to the redux store
        search: searchReducer, // add search reducer to the redux store
        toggle: toggle, // add toggle reducer to the redux store
        trailer: trailerReducer, // add trailer reducer to the redux store
        upcomingMovies: upcomingMoviesReducer, // add upcomingMovies reducer to the redux store
        visibility: visibilityReducer, // add visibility reducer to the redux store
    },
})
