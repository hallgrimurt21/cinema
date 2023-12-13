import React from "react"
import {useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Image} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {ScrollView} from "react-native-gesture-handler"

const UpcomingMovies = () => {
    const navigate = useNavigation().navigate
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies)

    return (
        <ScrollView>
            <View>
                {upcomingMovies.map((movie, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigate("Upcoming Detail", {id: movie._id})}
                    >
                        <Text>{movie.title}</Text>
                        <Text>{movie["release-dateIS"]}</Text>
                        <Image
                            source={{uri: movie.poster}}
                            style={{width: 100, height: 100}}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default UpcomingMovies
