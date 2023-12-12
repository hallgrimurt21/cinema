import React from "react"
import {View, Text, Pressable} from "react-native"
import {useSelector} from "react-redux"
import {useNavigation} from "@react-navigation/native"

const CinemaMovies = ({id}) => {
    const movies = useSelector((state) => state.allMovies.movies)
    const filteredMovies = movies.filter((movie) =>
        movie.showtimes.some((showtime) => showtime.cinema.id === id),
    )
    const navigate = useNavigation().navigate

    const handlePress = (movieID) => {
        navigate("Movie", {movieID, cinemaID: id})
    }
    return (
        <View>
            {filteredMovies.map((movie) => (
                <View key={movie.id}>
                    <Pressable onPress={() => handlePress(movie.id)}>
                        <Text>{movie.title}</Text>
                    </Pressable>
                </View>
            ))}
        </View>
    )
}

export default CinemaMovies
