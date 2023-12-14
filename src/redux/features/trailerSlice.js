import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    trailerVisible: false,
    trailerID: null,
}

const trailerSlice = createSlice({
    name: "trailer",
    initialState,
    reducers: {
        showTrailer: (state, action) => {
            state.trailerVisible = true
            state.trailerID = action.payload
        },
        hideTrailer: (state) => {
            state.trailerVisible = false
            state.trailerID = null
        },
    },
})

export const {showTrailer, hideTrailer} = trailerSlice.actions

export default trailerSlice.reducer
