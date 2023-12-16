import React from "react"
import {
    View,
    SafeAreaView,
    Pressable,
    Text,
    ImageBackground,
} from "react-native"
import {useNavigation} from "@react-navigation/native"

import TrailerButton from "../TrailerButton"
import styles from "./styles"

const MovieHeader = ({movie, handleNavigate}) => {
    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.poster} source={{uri: movie.poster}}>
            <View style={styles.overBox}>
                <View>
                    <View style={styles.header}>
                        <SafeAreaView style={styles.safe}>
                            <Pressable onPress={handleNavigate}>
                                <Text style={styles.back}>Back</Text>
                            </Pressable>
                            <View style={styles.rightInfo}>
                                <Text style={styles.title}>{movie.title}</Text>
                                <Text style={styles.year}>{movie.year}</Text>
                            </View>
                        </SafeAreaView>
                    </View>
                    <TrailerButton movie={movie} navigation={navigation} />
                </View>
                <View style={styles.trailerButton}>
                    <Text style={styles.time}>
                        Duration: {movie.durationMinutes} Min
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default MovieHeader
