// Import createSlice from Redux Toolkit
import {createSlice} from "@reduxjs/toolkit"

// Create a slice for the search term state
const initialState = {
    value: "",
    status: "closed",
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateSearchTerm: (state, action) => {
            state.value = action.payload
        },
        closeSearch: (state) => {
            state.status = "closed"
        },
        openSearch: (state) => {
            state.status = "open"
        },
        clearSearch: (state) => {
            state.value = ""
            state.status = "closed"
        },
    },
})

export const {updateSearchTerm, closeSearch, openSearch, clearSearch} =
    searchSlice.actions

export default searchSlice.reducer
