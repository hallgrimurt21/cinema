import React from "react"
import {
    View,
    SafeAreaView,
    Pressable,
    Text,
    ImageBackground,
} from "react-native"
import {useNavigation} from "@react-navigation/native"
import styles from "./styles" // import your styles
import {hideAll} from "../../redux/features/visibilitySlice"
import {useDispatch} from "react-redux"

const MovieHeader = ({movie, handleNavigate}) => {
    const dispatch = useDispatch()
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
                    {movie.trailers && // if there is a trailer available
                    movie.trailers[0] &&
                    movie.trailers[0].results &&
                    movie.trailers[0].results[0] &&
                    movie.trailers[0].results[0].key ? (
                        <Pressable // show trailer button
                            style={({pressed}) => [
                                {opacity: pressed ? 0.5 : 1},
                                styles.trailerButton,
                            ]}
                            onPress={() =>
                                navigation.navigate("Trailer", {
                                    // navigate to trailer View
                                    trailerID: movie.trailers[0].results[0].key,
                                })
                            }
                        >
                            <Text style={styles.time}>Watch Trailer</Text>
                        </Pressable>
                    ) : (
                        <View style={styles.trailerButton}>
                            <Text style={styles.time}>
                                No Trailer available
                            </Text>
                        </View>
                    )}
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
