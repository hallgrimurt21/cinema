import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getAuthToken} from "./authSlice"

export const fetchUpcomingMovies = createAsyncThunk(
    "upcoming/fetchUpcomingMovies",
    async (_, {getState}) => {
        const token = getAuthToken(getState())
        const response = await fetch("https://api.kvikmyndir.is/upcoming", {
            headers: {
                "x-access-token": token,
            },
        })
        let data = await response.json()
        data = data.sort(
            (a, b) =>
                new Date(a["release-dateIS"]) - new Date(b["release-dateIS"]),
        )
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
