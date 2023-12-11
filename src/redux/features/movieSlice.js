// src/redux/features/movieSlice.js
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    name: "Generic Movie",
    image: "https://example.com/generic-movie.jpg",
    plot: "This is a generic movie for testing purposes.",
    duration: 120,
    genre: "Drama",
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.name = action.payload.name
            state.image = action.payload.image
            state.plot = action.payload.plot
            state.duration = action.payload.duration
            state.genre = action.payload.genre
        },
    },
})

export const {setMovie} = movieSlice.actions

export default movieSlice.reducer
