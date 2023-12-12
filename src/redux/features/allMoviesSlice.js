import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getAuthToken} from "../../services/cinema"


// Async thunk for fetching data
export const fetchMovies = createAsyncThunk(
    "cinema/fetchMovies",
    async() => {
        const token = await getAuthToken()
        const response = await fetch("https://api.kvikmyndir.is/movies", {
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
    movies: [],
    status: "idle",
    error: null,
}

// Create cinema slice
const allMoviesSlice = createSlice({
    name: "allMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading"
                state.movies = []
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded"
                // Add movies to the state array
                state.movies = state.movies.concat(action.payload)
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

// Export reducer
export default allMoviesSlice.reducer
