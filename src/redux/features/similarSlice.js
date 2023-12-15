import {createSlice} from "@reduxjs/toolkit"

const similarSlice = createSlice({
    name: "similar",
    initialState: {
        genres: [],
        id: "",
    },
    reducers: {
        addGenresFromMovie: (state, action) => {
            if (movie && movie.genre) {
                const movie = action.payload
                movie.genre.forEach((genre) => {
                    if (!state.genres.includes(genre["NameEN\t"])) {
                        state.genres.push(genre["NameEN\t"])
                    }
                })
            }
        },
        addIdFromMovie: (state, action) => {
            state.id = action.payload
        },
    },
})

export const {addGenresFromMovie, addIdFromMovie} = similarSlice.actions

export default similarSlice.reducer
