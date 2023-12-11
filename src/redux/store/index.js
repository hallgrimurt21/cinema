import {configureStore} from "@reduxjs/toolkit"

// This is a placeholder reducer
const placeholderReducer = (state = {}, action) => {
    return state
}

export const store = configureStore({
    reducer: {
        placeholder: placeholderReducer,
    },
})
