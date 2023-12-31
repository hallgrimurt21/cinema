import {StyleSheet} from "react-native"

import {
    strongWhite,
    black,
    champagne,
} from "../../styles/colors"
import hexToRGBA from "../../styles/hexToRgba"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    overContainer: {
        position: "absolute",
        width: deviceWidth,
        zIndex: 1,
    },

    safeContainer: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: champagne,
        width: deviceWidth,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: hexToRGBA(black, 0.97),
        shadowColor: black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },

    drText: {
        color: strongWhite,
        marginTop: -6,
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 10,
        textShadowColor: strongWhite,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 5,
    },
})

export default styles
