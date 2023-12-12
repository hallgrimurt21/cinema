import React from "react"
import {
    View,
    Text,
    Linking,
    Pressable,
    ImageBackground,
    ScrollView,
    Button,
} from "react-native"
import styles from "./styles"
import {useSelector, useDispatch} from "react-redux"
import {
    showPlot,
    showGenres,
    showShowtimes,
    hideAll,
} from "../../redux/features/visibilitySlice"

// eslint-disable-next-line require-jsdoc
function MovieDetailsScreen({route}) {
    const {cinemaID, movieID} = route.params
    const movies = useSelector((state) => state.movies.movies)
    const movie = movies.find((movie) => movie.id === movieID)
    const dispatch = useDispatch()
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )

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

    const showtimes = movie.showtimes
        .filter((showtime) => showtime.cinema.id === cinemaID)
        .map((showtime) => showtime.schedule)
        .flat()

    const handlePress = (url) => {
        Linking.openURL(url)
    }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.poster} source={{uri: movie.poster}}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
            </ImageBackground>
            <View style={styles.buttonRow}>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.botButton,
                    ]}
                    onPress={() => handleToggle("plot")}
                >
                    <Text style={styles.botButText}>Plot</Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.botButton,
                    ]}
                    onPress={() => handleToggle("genres")}
                >
                    <Text style={styles.botButText}>Genres</Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.botButton,
                    ]}
                    onPress={() => handleToggle("showtimes")}
                >
                    <Text style={styles.botButText}>Showtimes</Text>
                </Pressable>
            </View>
            {visibleSection === "plot" && (
                <Text style={styles.plot}>{movie.plot}</Text>
            )}
            {visibleSection === "genres" && (
                <View style={styles.genres}>
                    {movie.genres.map((genre, index) => (
                        <Text style={styles.genre} key={index}>
                            {genre["NameEN\t"]}
                        </Text>
                    ))}
                </View>
            )}
            {visibleSection === "showtimes" && (
                <View style={styles.allShows}>
                    {showtimes.map((showtime, index) => (
                        <Pressable
                            style={({pressed}) => [
                                {opacity: pressed ? 0.5 : 1},
                                styles.showtime,
                            ]}
                            key={index}
                            onPress={() => handlePress(showtime.purchase_url)}
                        >
                            <Text style={styles.time}>{showtime.time}</Text>
                            <Text style={styles.buy}>Buy ticket</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </ScrollView>
    )
}

export default MovieDetailsScreen
