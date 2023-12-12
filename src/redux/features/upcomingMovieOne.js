import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchUpcomingMovieByID = createAsyncThunk(
    "upcomingMovieOne/fetchUpcomingMovieOne",
    async(id) => {
        const response = await fetch(`https://api.kvikmyndir.is/movies/${id}`)
        const data = await response.json()
        return data
    },
)

const initialState = {
    movie: {},
    status: "idle",
    error: null,
}

const upcomingMovieSlice = createSlice({
    name: "upcoming",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovieByID.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchUpcomingMovieByID.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.movie = action.payload
            })
            .addCase(fetchUpcomingMovieByID.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export default upcomingMovieSlice.reducer
