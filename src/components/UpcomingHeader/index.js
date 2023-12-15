import React from "react"
import {
    View,
    SafeAreaView,
    Pressable,
    Text,
    ImageBackground,
} from "react-native"
import styles from "./styles" // import your styles

const UpcomingHeader = ({upcoming, handleNavigate}) => {
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
        </ImageBackground>
    )
}

export default UpcomingHeader
