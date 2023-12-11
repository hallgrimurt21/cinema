// src/views/movie/index.js
import React from "react"
import {Text, Image, View} from "react-native"
import {useSelector} from "react-redux"

const Movie = () => {
    const movie = useSelector((state) => state.movie)

    return (
        <View>
            <Text>{movie.name}</Text>
            <Image
                source={{uri: movie.image}}
                style={{width: 100, height: 100}}
            />
            <Text>{movie.plot}</Text>
            <Text>Duration: {movie.duration} minutes</Text>
            <Text>Genre: {movie.genre}</Text>
        </View>
    )
}

export default Movie
