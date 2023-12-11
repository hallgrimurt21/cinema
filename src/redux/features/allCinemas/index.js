import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getAuthToken} from "../../../services/cinema"


// Async thunk for fetching data
export const fetchCinemas = createAsyncThunk(
    "cinema/fetchCinemas",
    async() => {
        const token = await getAuthToken()
        const response = await fetch("https://api.kvikmyndir.is/theaters", {
            headers: {
                "x-access-token": token,
            },
        })
        const data = await response.json()
        return data
    },
)

// Initial state
const initialState = {
    cinemas: [],
    status: "idle",
    error: null,
}

// Create cinema slice
const allCinemasSlice = createSlice({
    name: "allCinemas",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCinemas.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchCinemas.fulfilled, (state, action) => {
                state.status = "succeeded"
                // Add cinemas to the state array
                state.cinemas = state.cinemas.concat(action.payload)
            })
            .addCase(fetchCinemas.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

// Export reducer
export default allCinemasSlice.reducer
