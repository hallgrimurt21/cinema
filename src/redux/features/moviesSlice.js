import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

// Async thunk for fetching data
export const fetchMovies = createAsyncThunk(
    "cinema/fetchMovies",
    async (token, thunkAPI) => {
        console.log("fetchMovies", token)
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
const moviesSlice = createSlice({
    name: "movies",
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
export default moviesSlice.reducer
