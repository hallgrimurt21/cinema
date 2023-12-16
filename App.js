import React, {useEffect} from "react"
import "react-native-gesture-handler"
import {Provider as StoreProvider} from "react-redux"
import {store} from "./src/redux/store"
import Appcontainer from "./src/routes"
import {fetchCinemas} from "./src/redux/features/cinemasSlice"
import {fetchMovies} from "./src/redux/features/moviesSlice"
import {fetchUpcomingMovies} from "./src/redux/features/upcomingMovies"
import {fetchGenres} from "./src/redux/features/genresSlice"
import {useDispatch, useSelector} from "react-redux"
import {getAuthToken} from "./src/redux/features/authSlice"
import {LogBox} from "react-native"

LogBox.ignoreLogs(["Sending `onAnimatedValueUpdate` with no listeners registered."])

function AppContent() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)

    useEffect(() => {
        dispatch(getAuthToken())
    }, [dispatch])

    useEffect(() => {
        if (token) {
            dispatch(fetchCinemas(token))
            dispatch(fetchMovies(token))
            dispatch(fetchUpcomingMovies(token))
            dispatch(fetchGenres(token))
        }
    }, [dispatch, token])

    return <Appcontainer />
}

export default function App() {
    return (
        <StoreProvider store={store}>
            <AppContent />
        </StoreProvider>
    )
}
