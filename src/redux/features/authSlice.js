// src/redux/features/authSlice.js
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {Buffer} from "buffer"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {REACT_APP_USERNAME, REACT_APP_PASSWORD} from "@env"

const encodedCredentials = Buffer.from(
    `${REACT_APP_USERNAME}:${REACT_APP_PASSWORD}`,
).toString("base64")

export const getAuthToken = createAsyncThunk("auth/getToken", async () => {
    const savedToken = await AsyncStorage.getItem("token")
    const savedDate = await AsyncStorage.getItem("tokenDate")

    if (
        savedToken &&
        savedDate &&
        new Date() - new Date(savedDate) < ONE_DAY_IN_MS
    ) {
        return savedToken
    }

    const response = await fetch("https://api.kvikmyndir.is/authenticate", {
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
        },
    })

    const data = await response.json()

    await AsyncStorage.setItem("token", data.token)
    await AsyncStorage.setItem("tokenDate", new Date().toISOString())

    return data.token
})

const authSlice = createSlice({
    name: "auth",
    initialState: {token: null, status: "idle", error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAuthToken.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getAuthToken.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.token = action.payload
            })
            .addCase(getAuthToken.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export default authSlice.reducer
