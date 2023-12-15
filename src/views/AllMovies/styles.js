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
        color: "white",
        fontSize: 16,
    },
})

export default styles
