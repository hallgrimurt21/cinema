import {configureStore} from "@reduxjs/toolkit"
import movierReducer from "../features/movies/movie-slice"


export const store = configureStore({
    reducer: {
        movie: movierReducer,
    },
})
