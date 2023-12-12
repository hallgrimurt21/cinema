import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Image} from "react-native"
import {fetchUpcomingMovies} from "../../redux/features/upcomingMovies"
import {useNavigation} from "@react-navigation/native"
import {ScrollView} from "react-native-gesture-handler"

const UpcomingMovies = () => {
    const navigate = useNavigation().navigate
    const dispatch = useDispatch()
    const upcoming = useSelector((state) => state.upcomingMovies.movies)

    useEffect(() => {
        dispatch(fetchUpcomingMovies())
    }, [])

    return (
        <ScrollView>
            <View>
                {upcoming.map((movie, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigate("Upcoming", {id: movie.id})}>
                        <Text>{movie.title}</Text>
                        <Text>{movie["release-dateIS"]}</Text>
                        <Image source={{uri: movie.poster}} style={{width: 100, height: 100}} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default UpcomingMovies
