/* eslint-disable max-len */
import React from "react"
import {
    View,
    Text,
    Linking,
    Pressable,
    ImageBackground,
    ScrollView,
    SafeAreaView,
} from "react-native"
import styles from "./styles"
import {useSelector, useDispatch} from "react-redux"
import {
    showPlot,
    showGenres,
    showShowtimes,
    hideAll,
} from "../../redux/features/visibilitySlice"
import {useNavigation} from "@react-navigation/native"
import ButtonRow from "../../components/ButtonRow"
import MovieHeader from "../../components/MovieHeader"

/**
 * Displays the movie details
 * @param {Object} param0 - The props object
 * @param {Object} param0.route - The route object
 * @return {JSX.Element} The movie details component
 */
function Movie({route}) {
    const {cinemaID, movieID} = route.params
    const movies = useSelector((state) => state.movies.movies)
    const movie = movies.find((movie) => movie.id === movieID)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )

    const showtimes = movie.showtimes
        .filter((showtime) => showtime.cinema.id === cinemaID)
        .map((showtime) => showtime.schedule)
        .flat()

    const handlePress = (url) => {
        Linking.openURL(url)
    }

    handleNavigate = () => {
        return () => {
            dispatch(hideAll())
            navigation.goBack()
        }
    }
    const handleToggle = (section) => {
        if (visibleSection === section) {
            dispatch(hideAll())
        } else {
            switch (section) {
            case "plot":
                dispatch(showPlot())
                break
            case "genres":
                dispatch(showGenres())
                break
            case "showtimes":
                dispatch(showShowtimes())
                break
            default:
                break
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <MovieHeader movie={movie} handleNavigate={handleNavigate()} />

            <ButtonRow
                handleToggle={handleToggle}
                visibleSection={visibleSection}
                movie={movie}
                showtimes={showtimes}
                handlePress={handlePress}
            />

            {movie.trailers &&
            movie.trailers[0] &&
            movie.trailers[0].results &&
            movie.trailers[0].results[0] &&
            movie.trailers[0].results[0].key ? (
                    <Pressable
                        style={({pressed}) => [
                            {opacity: pressed ? 0.5 : 1},
                            styles.trailerButton,
                        ]}
                        onPress={() =>
                            navigation.navigate("Trailer", {
                                trailerID: movie.trailers[0].results[0].key,
                            })
                        }
                    >
                        <Text style={styles.time}>Watch Trailer</Text>
                    </Pressable>
                ) : (
                    <View style={styles.trailerButton}>
                        <Text style={styles.time}>No Trailer available</Text>
                    </View>
                )}
        </ScrollView>
    )
}

export default Movie
