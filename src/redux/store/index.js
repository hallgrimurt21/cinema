import {configureStore} from "@reduxjs/toolkit"
import cinemaReducer from "../features/cinema/index"
import allCinemasReducer from "../features/allCinemas/index"

export const store = configureStore({
    reducer: {
        cinema: cinemaReducer,
        allCinemas: allCinemasReducer,
    },
})
