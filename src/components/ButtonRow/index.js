import React, {useEffect} from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles" // import your styles
import {addIdFromMovie} from "../../redux/features/similarSlice"
import CinemaMovies from "../../components/CinemaMovies"
import {useDispatch} from "react-redux"
import {addGenresFromMovie} from "../../redux/features/similarSlice"

const ButtonRow = ({
    handleToggle,
    visibleSection,
    movie,
    showtimes,
    handlePress,
}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addGenresFromMovie(movie))
        dispatch(addIdFromMovie(movie.id))
    }, [movie, dispatch])
    return (
        <View>
            <View style={styles.buttonRow}>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        visibleSection === "plot"
                            ? styles.activeButton
                            : styles.botButton,
                    ]}
                    onPress={() => handleToggle("plot")}
                >
                    <Text
                        style={
                            visibleSection === "plot"
                                ? styles.activeButtonText
                                : styles.botButText
                        }
                    >
                        Plot
                    </Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        visibleSection === "genres"
                            ? styles.activeButton
                            : styles.botButton,
                    ]}
                    onPress={() => handleToggle("genres")}
                >
                    <Text
                        style={
                            visibleSection === "genres"
                                ? styles.activeButtonText
                                : styles.botButText
                        }
                    >
                        Genres
                    </Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        visibleSection === "showtimes"
                            ? styles.activeButton
                            : styles.botButton,
                    ]}
                    onPress={() => handleToggle("showtimes")}
                >
                    <Text
                        style={
                            visibleSection === "showtimes"
                                ? styles.activeButtonText
                                : styles.botButText
                        }
                    >
                        Showtimes
                    </Text>
                </Pressable>
            </View>
            {visibleSection === "plot" && (
                <View style={styles.plotBox}>
                    <Text style={styles.plot}>{movie.plot}</Text>
                </View>
            )}
            {visibleSection === "genres" && (
                <View style={styles.genres}>
                    {movie.genres.map((genre, index) => (
                        <Text style={styles.genre} key={index}>
                            {genre["NameEN\t"]}
                        </Text>
                    ))}
                    <Text>Similar movies</Text>
                    <CinemaMovies />
                </View>
            )}
            {visibleSection === "showtimes" && (
                <View style={styles.allShows}>
                    {showtimes.map((showtime, index) => (
                        <Pressable
                            style={({pressed}) => [
                                pressed
                                    ? styles.pressedShowtime
                                    : styles.showtime,
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
        </View>
    )
}

export default ButtonRow
