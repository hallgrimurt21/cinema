import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const baseUrl = "https://api.kvikmyndir.is/"

// eslint-disable-next-line max-len
const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzcxMGIzYzQwNzkzMzZiYzAyNTI0ZSIsImlhdCI6MTcwMjMwMzQ3MiwiZXhwIjoxNzAyMzg5ODcyfQ.akm89aii8MbuS6R3uz6X6cu59aIfCXK4mspwF-JEvNs"

export const fetchMoviesByTitle = createAsyncThunk(
    "movies/title",
    async(title) => {
        const response = await fetch(`${baseUrl}/movies/${title}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data
    },
)

export const fetchMoviesBySearch = createAsyncThunk(
    "movies/search",
    async(search) => {
        const response = await fetch(`${baseUrl}/movies?${search}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return data
    },
)
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        selectedMovie: {},
        selectedMovieisLoading: true,
        selectedMovieError: undefined,
        movies: [],
        moviesIsLoading: false,
        moviesError: undefined,
    },
    reducers: {
        getMovieByTitle: (state) => {
            state.selectedMovieisLoading = true
        },
        getMovieByTitleSuccess: (state, action) => {
            state.selectedMovie = action.payload
            state.selectedMovieisLoading = false
            state.selectedMovieError = undefined
        },
        getMovieByTitleFailure: (state, action) => {
            state.selectedMovieisLoading = false
            state.selectedMovieError = action.payload
        },
        getMoviesLoading: (state) => {
            state.moviesIsLoading = true
        },
        getMoviesReceived: (state, action) => {
            state.movies = action.payload
            state.moviesIsLoading = false
            state.moviesError = undefined
        },
        getMoviesFailed: (state, action) => {
            state.moviesIsLoading = false
            state.moviesError = action.payload
        },

    },
    extraReducers: {
        [fetchMoviesByTitle.pending]: (state) => {
            state.selectedMovieisLoading = true
        },
        [fetchMoviesByTitle.fulfilled]: (state, action) => {
            state.selectedMovie = action.payload
            state.selectedMovieisLoading = false
            state.selectedMovieError = undefined
        },
        [fetchMoviesByTitle.rejected]: (state, action) => {
            state.selectedMovieisLoading = false
            state.selectedMovieError = action.payload
        },
    },
})

export const {
    getMovieByTitle,
    getMovieByTitleSuccess,
    getMovieByTitleFailure,
    getMoviesLoading,
    getMoviesReceived,
    getMoviesFailed,
} = movieSlice.actions

export default movieSlice.reducer
