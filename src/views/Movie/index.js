// src/views/movie/index.js
import React from "react"
import {Text, Image, View, Button} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {nextMovie} from "../../redux/features/movieSlice"

const Movie = () => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movie)
    const movie = movies.movie

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
            <Button title="Next Movie" onPress={() => dispatch(nextMovie())} />
        </View>
    )
}

export default Movie
