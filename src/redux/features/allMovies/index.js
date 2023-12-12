import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getAuthToken} from "../../../services/cinema"


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

export const filterMovies = createAsyncThunk("cinema/filterMovies", async(cinemaId, {getState}) => {
    try {
        const movies = getState().allMovies.movies
        console.log("Movies:", movies) // Log filtered movies
        console.log("ID:", cinemaId) // Log filtered movies
        const filteredMovies = movies.filter((movie) =>
            movie.showtimes.some((showtime) => showtime.cinema.id === cinemaId),
        )
        console.log("Filtered Movies:", filteredMovies) // Log filtered movies
        if (filteredMovies.length === 0) {
            throw new Error(`No movies found with cinema id ${cinemaId}`)
        }
        return filteredMovies
    } catch (error) {
        throw error
    }
})

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

            .addCase(filterMovies.pending, (state) => {
                console.log("Loading...")
                state.status = "loading"
            })
            .addCase(filterMovies.fulfilled, (state, action) => {
                console.log("Fulfilled")
                state.status = "succeeded"
                state.movies = []
                // Add movies to the state array
                state.movies = action.payload
            })
            .addCase(filterMovies.rejected, (state, action) => {
                console.log("Rejected")
                state.status = "failed"
                state.movies = []
                state.error = action.error.message
            })
    },
})

// Export reducer
export default allMoviesSlice.reducer
