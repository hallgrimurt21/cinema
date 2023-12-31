import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    selectedOptions: [],
    error: null,
    defaultValue: "Select...",
}
export const dropDownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        toggleOption: (state, action) => {
            const index = state.selectedOptions.indexOf(action.payload)
            if (index >= 0) {
                state.selectedOptions.splice(index, 1)
            } else {
                state.selectedOptions.push(action.payload)
            }
        },
        clearSelected: (state) => {
            state.selectedOptions = []
        },
    },
})

export const {toggleOption, clearSelected} = dropDownSlice.actions

export default dropDownSlice.reducer
