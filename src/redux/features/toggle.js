import {createSlice} from "@reduxjs/toolkit"

export const toggleSlice = createSlice({
    name: "movie",
    initialState: {
        showUpcoming: false,
    },
    reducers: {
        toggleShowUpcoming: (state) => {
            state.showUpcoming = !state.showUpcoming
        },
    },
})

export const {toggleShowUpcoming} = toggleSlice.actions

export default toggleSlice.reducer
