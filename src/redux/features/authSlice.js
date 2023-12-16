import base64 from "react-native-base64"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {USERNAME, PASSWORD} from "@env"


export const getAuthToken = createAsyncThunk(
    "auth/getToken",

    async(_, thunkAPI) => {
        const encodedCredentials = base64.encode(`${USERNAME}:${PASSWORD}`)
        try {
            const response = await fetch(
                "https://api.kvikmyndir.is/authenticate",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Basic ${encodedCredentials}`,
                    },
                },
            )

            if (response.ok) {
                const data = await response.json()
                return data.token
            } else {
                return thunkAPI.rejectWithValue("Authentication failed")
            }
        } catch (error) {
            return thunkAPI.rejectWithValue("error")
        }
    },
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAuthToken.fulfilled, (state, action) => {
                state.status = "succeeded"
                // Add the fetched token to the state
                state.token = action.payload
            })
            .addCase(getAuthToken.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getAuthToken.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export default authSlice.reducer
