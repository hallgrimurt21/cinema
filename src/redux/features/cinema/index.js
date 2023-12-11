import {createSlice} from "@reduxjs/toolkit"

// Initial state
const initialState = {
    cinemas: [],
}

// Create cinema slice
const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {
        setCinemas: (state, action) => {
            state.cinemas = action.payload
        },
        addCinema: (state, action) => {
            state.cinemas.push(action.payload)
        },
    },
})

// Export actions
export const {setCinemas, addCinema} = cinemaSlice.actions

// Export reducer
export default cinemaSlice.reducer
