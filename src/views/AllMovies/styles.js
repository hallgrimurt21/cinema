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
        zIndex: 3,
        width: deviceWidth / 4,
        marginTop: 8,
        marginLeft: 20,
    },
    safer: {
        zIndex: 2,
    },
    switchBtnText: {
        color: "white",
        fontSize: 16,
    },
})

export default styles
