import {createSlice} from "@reduxjs/toolkit"

const similarSlice = createSlice({
    name: "similar",
    initialState: {
        genres: [],
        id: "",
    },
    reducers: {
        addGenresFromMovie: (state, action) => {
            const movie = action.payload
            movie.genres.forEach((genre) => {
                if (!state.genres.includes(genre["NameEN\t"])) {
                    state.genres.push(genre["NameEN\t"])
                }
            })
        },
        addIdFromMovie: (state, action) => {
            state.id = action.payload
        },
        clearSimilar: (state) => {
            state.genres = []
        },
    },
})

export const {addGenresFromMovie, addIdFromMovie, clearSimilar} = similarSlice.actions

export default similarSlice.reducer
