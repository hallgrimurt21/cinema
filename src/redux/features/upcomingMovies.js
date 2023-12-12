import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getAuthToken} from "../../services/cinema"

export const fetchUpcomingMovies = createAsyncThunk(
    "upcoming/fetchUpcomingMovies",
    async() => {
        const token = await getAuthToken()
        const response = await fetch("https://api.kvikmyndir.is/upcoming", {
            headers: {
                "x-access-token": token,
            },
        })
        const data = await response.json()
        return data
    },
)

const initialState = {
    movies: [],
    status: "idle",
    error: null,
}

const upcomingMoviesSlice = createSlice({
    name: "upcomingMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovies.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.movies = action.payload
            })
            .addCase(fetchUpcomingMovies.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export default upcomingMoviesSlice.reducer
