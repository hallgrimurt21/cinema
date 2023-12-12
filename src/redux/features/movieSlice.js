// src/redux/features/movieSlice.js
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    movies: [
        {
            name: "Generic Movie 1",
            image: "https://example.com/generic-movie1.jpg",
            plot: "This is a generic movie for testing purposes.",
            duration: 120,
            genre: "Drama",
        },
        {
            name: "Generic Movie 2",
            image: "https://example.com/generic-movie2.jpg",
            plot: "This is another generic movie for testing purposes.",
            duration: 100,
            genre: "Comedy",
        },
        // add more movies here
    ],
    movie: null, // current movie
}

// Set the initial movie to the first movie in the array
initialState.movie = initialState.movies[0]

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload
        },
        nextMovie: (state) => {
            const currentIndex = state.movies.findIndex(
                (m) => m.name === state.movie.name,
            )
            state.movie = state.movies[(currentIndex + 1) % state.movies.length]
        },
    },
})

export const {setMovie, nextMovie} = movieSlice.actions

export default movieSlice.reducer
