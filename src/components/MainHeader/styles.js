import {StyleSheet} from "react-native"
import {
    strongGrey,
    mediumGrey,
    mediumWhite,
    strongWhite,
    black,
} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"
import hexToRGBA from "../../styles/hexToRgba"

const styles = StyleSheet.create({
    overContainer: {
        position: "absolute",
        width: deviceWidth,
        zIndex: 1,
    },

    safeContainer: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        width: deviceWidth,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: hexToRGBA(strongGrey, 0.97),
        shadowColor: black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },

    drText: {
        paddingBottom: 10,
        color: strongWhite,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
})

export default styles