// TrailerButton.js
import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles" // replace with the actual path to your styles

const TrailerButton = ({movie, navigation}) => {
    const hasTrailer =
        movie.trailers &&
        movie.trailers[0] &&
        movie.trailers[0].results &&
        movie.trailers[0].results[0] &&
        movie.trailers[0].results[0].key

    return hasTrailer ? (
        <Pressable
            style={({pressed}) => [
                {opacity: pressed ? 0.5 : 1},
                styles.trailerButton,
            ]}
            onPress={() =>
                navigation.navigate("Trailer", {
                    trailerID: movie.trailers[0].results[0].key,
                })
            }
        >
            <Text style={styles.time}>Watch Trailer</Text>
        </Pressable>
    ) : (
        <View style={styles.trailerButton}>
            <Text style={styles.time}>No Trailer available</Text>
        </View>
    )
}

export default TrailerButton
