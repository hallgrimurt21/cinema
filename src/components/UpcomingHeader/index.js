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
            <TrailerButton movie={upcoming} navigation={navigation} />
        </ImageBackground>
    )
}

export default UpcomingHeader
