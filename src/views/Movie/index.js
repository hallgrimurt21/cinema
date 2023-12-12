import React from "react"
import {View, Text, Linking, Pressable, Image} from "react-native"
import {useSelector} from "react-redux"

function MovieDetailsScreen({route}) {
    const {cinemaID, movieID} = route.params
    const movie = useSelector((state) =>
        state.allMovies.movies.find((movie) => movie.id === movieID),
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
            <Text>Cinema ID: {cinemaID}</Text>
            <Text>Movie ID: {movieID}</Text>
            <Text>{movie.title}</Text>
            <Image
                source={{uri: movie.poster}}
                style={{width: 100, height: 100}}
            />
            <Text>{movie.plot}</Text>
            <Text>{movie.year}</Text>
            <View>
                {movie.genres.map((genre, index) => (
                    <Text key={index}>{genre["NameEN\t"]}</Text>
                ))}
            </View>
            <View>
                {showtimes.map((showtime, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handlePress(showtime.purchase_url)}
                    >
                        <Text>{showtime.time}</Text>
                        <Text>Buy ticket</Text>
                    </Pressable>
                ))}
            </View>
            {console.log(showtimes)}
        </View>
    )
}

export default MovieDetailsScreen
