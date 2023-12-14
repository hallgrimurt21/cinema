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
        showRelease(state) {
            state.visibleSection = "release"
        },
        hideAll(state) {
            state.visibleSection = null
        },
        toggleDescription(state) {
            state.descriptionVisible = !state.descriptionVisible
        },
    },
})

export const {showPlot, showGenres, showShowtimes, showRelease, hideAll, toggleDescription} =
    visibilitySlice.actions

export default visibilitySlice.reducer
