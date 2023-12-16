import React from "react"
import {
    View,
    SafeAreaView,
    Pressable,
    Text,
    ImageBackground,
} from "react-native"
import {useNavigation} from "@react-navigation/native"

import styles from "./styles"

const UpcomingHeader = ({upcoming, handleNavigate}) => {
    const navigation = useNavigation()
    return (
        <ImageBackground style={styles.poster} source={{uri: upcoming.poster}}>
            <View style={styles.header}>
                <SafeAreaView style={styles.safe}>
                    <Pressable onPress={handleNavigate()}>
                        <Text style={styles.back}>Back</Text>
                    </Pressable>
                    <View style={styles.rightInfo}>
                        <Text style={styles.title}>{upcoming.title}</Text>
                        <Text style={styles.year}>{upcoming.year}</Text>
                    </View>
                </SafeAreaView>
            </View>
            {upcoming.trailers &&
            upcoming.trailers[0] &&
            upcoming.trailers[0].results &&
            upcoming.trailers[0].results[0] &&
            upcoming.trailers[0].results[0].key ? (
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.trailerButton,
                    ]}
                    onPress={() =>
                        navigation.navigate("Trailer", {
                            trailerID: upcoming.trailers[0].results[0].key,
                        })
                    }
                >
                    <Text style={styles.time}>Watch Trailer</Text>
                </Pressable>
            ) : (
                <View style={styles.trailerButton}>
                    <Text style={styles.time}>No Trailer available</Text>
                </View>
            )}
        </ImageBackground>
    )
}

export default UpcomingHeader
