import React from "react"
import {
    View,
    Text,
    Linking,
    Pressable,
    ImageBackground,
    ScrollView,
} from "react-native"
import {useSelector} from "react-redux"
import styles from "./styles"

// eslint-disable-next-line require-jsdoc
function MovieDetailsScreen({route}) {
    const {cinemaID, movieID} = route.params
    const movies = useSelector((state) => state.movies.movies)
    const movie = movies.find((movie) => movie.id === movieID)
    console.log(movie)

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
            <Text style={styles.plot}>{movie.plot}</Text>

            <View style={styles.genres}>
                {movie.genres.map((genre, index) => (
                    <Text style={styles.genre} key={index}>
                        {genre["NameEN\t"]}
                    </Text>
                ))}
            </View>
            <View style={styles.allShows}>
                {showtimes.map((showtime, index) => (
                    <Pressable
                        style={styles.showtime}
                        key={index}
                        onPress={() => handlePress(showtime.purchase_url)}
                    >
                        <Text>{showtime.time}</Text>
                        <Text>Buy ticket</Text>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    )
}

export default MovieDetailsScreen
