import React from "react"
import {
    View,
    Text,
    Linking,
    Pressable,
    Image,
    ImageBackground,
} from "react-native"
import {useSelector} from "react-redux"
import styles from "./styles"

// eslint-disable-next-line require-jsdoc
function MovieDetailsScreen({route}) {
    const {cinemaID, movieID} = route.params
    const movie = useSelector((state) =>
        state.movies.movies.find((movie) => movie.id === movieID),
    )

    const showtimes = movie.showtimes
        .filter((showtime) => showtime.cinema.id === cinemaID)
        .map((showtime) => showtime.schedule)
        .flat()

    const handlePress = (url) => {
        Linking.openURL(url)
    }

    return (
        <View>
            <ImageBackground source={{uri: movie.poster}} style={styles.image}>
                <Text style={styles.title}>{movie.title}</Text>
            </ImageBackground>
            <Text style={styles.info}>{movie.plot}</Text>
            <Text style={styles.info}>{movie.year}</Text>
            <View style={styles.genreBox}>
                {movie.genres.map((genre, index) => (
                    <Text style={styles.genre} key={index}>
                        {genre["NameEN\t"]}
                    </Text>
                ))}
            </View>
            <View>
                {showtimes.map((showtime, index) => (
                    <Pressable
                        style={styles.showtime}
                        key={index}
                        onPress={() => handlePress(showtime.purchase_url)}
                    >
                        <Text style={styles.time}>{showtime.time}</Text>
                        <Text style={styles.buy}>Buy ticket</Text>
                    </Pressable>
                ))}
            </View>

            {console.log(showtimes)}
        </View>
    )
}

export default MovieDetailsScreen
