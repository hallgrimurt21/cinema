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

    toggleButton: {
        position: "absolute",
        top: 0,
        left: 0,
        padding: 10,
        zIndex: 1,
    },
})

export default styles
