import {configureStore} from "@reduxjs/toolkit"
import cinemaReducer from "../features/cinema/index"

export const store = configureStore({
    reducer: {
        cinema: cinemaReducer,
    },
})
