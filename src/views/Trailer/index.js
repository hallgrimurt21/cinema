import YoutubeIframe from "react-native-youtube-iframe"
import React from "react"
import {Pressable, Text, View} from "react-native"
import {useNavigation} from "@react-navigation/native"

import styles from "./styles"

const Trailer = ({route}) => {
    const {trailerID} = route.params
    const navigation = useNavigation()

    handleNavigate = () => {
        return () => {
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.close} onPress={handleNavigate()}>
                <Text style={styles.closeText}>Close Trailer</Text>
            </Pressable>
            <View style={styles.trailer}>
                <YoutubeIframe
                    height={300}
                    videoId={trailerID}
                    backgroundColor="black"
                />
            </View>
        </View>
    )
}

export default Trailer
