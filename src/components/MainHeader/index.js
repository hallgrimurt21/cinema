import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
} from "react-native"
import styles from "./styles"

function MainHeader({}) {
    return (
        <View style={styles.overContainer}>
            <SafeAreaView style={styles.safeContainer}>
                <Text style={styles.drText}>Dr.Cinema</Text>
            </SafeAreaView>
        </View>
    )
}

export default MainHeader
