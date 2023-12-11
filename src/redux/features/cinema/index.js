import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// Async thunk for getting cinema
export const getCinema = createAsyncThunk(
    "cinema/getCinema",
    async(id, {getState}) => {
        const {allCinemas} = getState()
        const cinema = allCinemas.cinemas.find((cinema) => cinema.id === id)
        console.log(cinema)
        return cinema
    },
)


// Initial state
const initialState = {
    name: "",
    description: "",
    address: "",
    phone: "",
    website: "",
}

// Create cinema slice
const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {
        setCinema: (state, action) => {
            state.name = action.payload.name
            state.description = action.payload.description
            state.address = action.payload["address\t"] + action.payload.address.city
            state.phone = action.payload.phone
            state.website = action.payload.website
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCinema.fulfilled, (state, action) => {
            state.name = action.payload.name
            state.description = action.payload.description
            state.address = action.payload["address\t"] + action.payload.address.city
            state.phone = action.payload.phone
            state.website = action.payload.website
        })
    },

})

// Export reducer and actions
export const {setCinema} = cinemaSlice.actions
export default cinemaSlice.reducer
