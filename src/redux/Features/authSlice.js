import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios" // Assuming you're using axios for HTTP requests

const domain = 
// Async action for user login
export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
    const response = await axios.post("/api/login", credentials)
    return response.data
})

// Async action for user logout
export const logoutUser = createAsyncThunk("auth/logout", async () => {
    const response = await axios.post("/api/logout")
    return response.data
})

const authSlice = createSlice({
    name: "auth",
    initialState: {user: null, status: "idle", error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded"
                // Add user to state
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.status = "succeeded"
                // Remove user from state
                state.user = null
            })
    },
})

export default authSlice.reducer
