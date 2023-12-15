import {StyleSheet} from "react-native"
import {
    strongGrey,
    mediumGrey,
    mediumWhite,
    strongWhite,
} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    container: {
        backgroundColor: strongGrey,
    },
    imageContainer: {
        position: "absolute",
        top: 30,
        right: 10,
        padding: 10,
        zIndex: 2,
    },
    clickableImage: {
        width: 50,
        height: 50,
    },
    clearText: {
        marginTop: 100,
        color: "white",
        fontSize: 16,
        textAlign: "right",
    },

    toggleButton: {
        position: "absolute",
        top: 0,
        left: 0,
        padding: 10,
        zIndex: 1,
    },
})

export default styles
