import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


// Async thunk for fetching data
export const getMovies = createAsyncThunk(
    "cinema/getMovies",
    async(id, {getState}) => {
        const allMovies = getState().allMovies.movies
        return allMovies.filter((movie) =>
            movie.showtimes.some((showtime) => showtime.cinema.id === id),
        )
    },
)

// Initial state
const initialState = {
    filteredMovies: [],
    status: "idle",
    error: null,
}

// Create cinema slice
const filteredMoviesSlice = createSlice({
    name: "filteredMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.status = "loading"
                state.movies = []
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.status = "succeeded"
                // Add movies to the state array
                state.movies = state.movies.concat(action.payload)
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

// Export reducer
export default filteredMoviesSlice.reducer
