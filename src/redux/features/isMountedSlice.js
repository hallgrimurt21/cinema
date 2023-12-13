import {createSlice} from "@reduxjs/toolkit"

export const isMountedSlice = createSlice({
    name: "isMounted",
    initialState: false,
    reducers: {
        setMounted: () => true,
        setUnmounted: () => false,
    },
})

export const {setMounted, setUnmounted} = isMountedSlice.actions

export default isMountedSlice.reducer
