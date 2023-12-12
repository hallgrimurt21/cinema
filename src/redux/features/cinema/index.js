import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// Async thunk
export const getCinema = createAsyncThunk("cinema/getCinema", async(id, {getState}) => {
    try {
        const cinemas = getState().allCinemas.cinemas
        const cinema = cinemas.find((cinema) => cinema.id === id)
        if (!cinema) {
            throw new Error(`No cinema found with id ${id}`)
        }
        return cinema
    } catch (error) {
        console.error("Error in getCinema:", error)
        throw error
    }
})
// Initial state
const initialState = {
    id: "",
    name: "",
    description: "",
    address: "",
    phone: "",
    website: "",
    status: "idle",
    error: null,
}

// Slice
const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCinema.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getCinema.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.id = action.payload.id
                state.name = action.payload.name
                state.description = action.payload.description
                state.address = action.payload["address\t"] + ", " + action.payload.city
                state.phone = action.payload.phone
                state.website = action.payload.website
            })
            .addCase(getCinema.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export default cinemaSlice.reducer
