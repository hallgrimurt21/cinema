import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {View, Text, TouchableOpacity} from "react-native"
import {fetchUpcomingMovies} from "../../redux/features/UpcomingMovies/upcomingMovies"
import {useNavigation} from "@react-navigation/native"
import {ScrollView} from "react-native-gesture-handler"

const UpcomingMovies = () => {
    const navigate = useNavigation().navigate
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.upcomingMovies.movies)

    useEffect(() => {
        dispatch(fetchUpcomingMovies())
    }, [])

    return (
        <ScrollView>
            <View>
                {movies.map((movie, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigate("Movie", {id: movie.id})}
                    >
                        <Text>{movie.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default UpcomingMovies
