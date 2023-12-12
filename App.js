/* eslint-disable require-jsdoc */
import React, {useEffect} from "react"
import "react-native-gesture-handler"
import {Provider as StoreProvider} from "react-redux"
import {store} from "./src/redux/store"
import Appcontainer from "./src/routes"
import {fetchCinemas} from "./src/redux/features/cinemasSlice"
import {fetchMovies} from "./src/redux/features/moviesSlice"
import {useDispatch} from "react-redux"

function AppContent() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCinemas())
        dispatch(fetchMovies())
    }, [dispatch])

    return <Appcontainer />
}

export default function App() {
    return (
        <StoreProvider store={store}>
            <AppContent />
        </StoreProvider>
    )
}
