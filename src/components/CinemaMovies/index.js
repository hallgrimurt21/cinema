import React, {useEffect} from "react"
import {View, Text} from "react-native"
import {useDispatch, useSelector} from "react-redux"

const CinemaMovies = ({id}) => {
    const movies = useSelector((state) => state.allMovies.movies)

    return (
        <View>
            {movies.map((movie) => (
                <View key={movie.id}>
                    <Text>{movie.title}</Text>
                </View>
            ))}
        </View>
    )
}

export default CinemaMovies
