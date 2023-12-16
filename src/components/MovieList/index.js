import React from "react"
import {useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Image} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {ScrollView} from "react-native-gesture-handler"
import styles from "./styles"

const MovieList = () => {
    const navigate = useNavigation().navigate
    const Movies = useSelector((state) => state.movies.movies)

    return (
        <ScrollView
            style={styles.scroller}
            contentContainerStyle={{paddingBottom: 200, paddingTop: 100}}
        >
            <View>
                {Movies.map((movie, index) => (
                    <TouchableOpacity key={index} style={styles.card}>
                        <Image
                            source={{uri: movie.poster}}
                            style={styles.poster}
                        />
                        <View>
                            <Text>{movie.title}</Text>
                            <Text>{movie["release-dateIS"]}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default MovieList
