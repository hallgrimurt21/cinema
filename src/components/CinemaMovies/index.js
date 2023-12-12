import React, {useEffect} from "react"
import {View, Text, Pressable} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {fetchMovies, filterMovies} from "../../redux/features/allMoviesSlice"
import {useNavigation} from "@react-navigation/native"

const CinemaMovies = ({id}) => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.allMovies.movies)
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(fetchMovies()).then(dispatch(filterMovies(id)))
    }, [dispatch, id])

    const handlePress = (movieID) => {
        navigation.navigate("Movie", {movieID, cinemaID: id})
    }
    return (
        <View>
            {movies.map((movie) => (
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
