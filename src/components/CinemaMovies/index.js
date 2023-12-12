import React from "react"
import {View, Text, Pressable, Image, ScrollView} from "react-native"
import {useSelector} from "react-redux"
import {useNavigation} from "@react-navigation/native"

const CinemaMovies = ({id}) => {
    const movies = useSelector((state) => state.movies.movies)
    const filteredMovies = movies.filter((movie) =>
        movie.showtimes.some((showtime) => showtime.cinema.id === id),
    )
    const navigate = useNavigation().navigate

    const handlePress = (movieID) => {
        navigate("Movie Page", {movieID, cinemaID: id})
    }
    return (
        <ScrollView contentContainerStyle={{paddingBottom: 200}}>
            {filteredMovies.map((movie) => (
                <View key={movie.id} style={{margin: 10}}>
                    <Pressable onPress={() => handlePress(movie.id)}>
                        <Text>{movie.title}</Text>
                        <Image
                            source={{uri: movie.poster}}
                            style={{width: 100, height: 100}}
                        />
                        <Text>{movie.year}</Text>
                        {movie.genres.map((genre, index) => (
                            <Text key={index}>{genre["NameEN\t"]}</Text>
                        ))}
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    )
}

export default CinemaMovies
