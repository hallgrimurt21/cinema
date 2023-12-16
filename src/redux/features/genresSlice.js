import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const fetchGenres = createAsyncThunk("genres/fetchGenres", async(token) => {
    const response = await fetch("https://api.kvikmyndir.is/genres", {
        headers: {
            "x-access-token": token,
        },
    })
    const data = await response.json()
    data.sort((a, b) => a["NameEN\t"].localeCompare(b["NameEN\t"]))
    return data
},
)
const initialState = {
    genres: [],
    status: "idle",
    error: null,
}
export const genresSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.status = "succeeded"
                // Add cinemas to the state array
                state.genres = state.genres.concat(action.payload)
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export {fetchGenres}

export default genresSlice.reducer
