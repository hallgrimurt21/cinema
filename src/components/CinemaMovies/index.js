import React, {useEffect} from "react"
import {View, Text} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {fetchMovies, filterMovies} from "../../redux/features/allMoviesSlice"

const CinemaMovies = ({id}) => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.allMovies.movies)

    useEffect(() => {
        dispatch(fetchMovies())
            .then(dispatch(filterMovies(id)))
    }, [dispatch, id])
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
