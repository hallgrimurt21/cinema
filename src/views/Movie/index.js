import React from "react"
import {ScrollView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import {hideAll} from "../../redux/features/visibilitySlice"
import ButtonRow from "../../components/ButtonRow"
import MovieHeader from "../../components/MovieHeader"
import styles from "./styles"
/**
 * Displays the movie details
 * @param {Object} param0 - The props object
 * @param {Object} param0.route - The route object
 * @return {JSX.Element} The movie details component
 */
function Movie({route}) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {cinemaID, movieID} = route.params // get the cinemaID and movieID from the route params
    const movies = useSelector((state) => state.movies.movies) // get the movies from the redux store
    const movie = movies.find((movie) => movie.id === movieID) // find the movie with the movieID

    const showtimes = movie.showtimes // get the showtimes from the movie and list them nicely
        .filter((showtime) => showtime.cinema.id === cinemaID)
        .map((showtime) => showtime.schedule)
        .flat()

    handleNavigate = () => {
        return () => {
            dispatch(hideAll())
            navigation.goBack()
        }
    } // handle the navigation back to the previous screen

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{paddingBottom: 100}}
        >
            <MovieHeader movie={movie} handleNavigate={handleNavigate()} />

            <ButtonRow movie={movie} showtimes={showtimes} />
        </ScrollView>
    )
}

export default Movie
