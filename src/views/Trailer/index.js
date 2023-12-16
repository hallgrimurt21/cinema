import YoutubeIframe from "react-native-youtube-iframe"
import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles"
import {useNavigation} from "@react-navigation/native"

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
            <Pressable
                style={styles.close}
                onPress={handleNavigate()}
            >
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
