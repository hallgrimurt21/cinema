import {createSlice} from "@reduxjs/toolkit"

const visibilitySlice = createSlice({
    name: "visibility",
    initialState: {visibleSection: null},
    reducers: {
        showPlot(state) {
            state.visibleSection = "plot"
        },
        showGenres(state) {
            state.visibleSection = "genres"
        },
        showShowtimes(state) {
            state.visibleSection = "showtimes"
        },
        hideAll(state) {
            state.visibleSection = null
        },
    },
})

export const {showPlot, showGenres, showShowtimes, hideAll} =
    visibilitySlice.actions

export default visibilitySlice.reducer
