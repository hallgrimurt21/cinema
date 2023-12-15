import {StyleSheet} from "react-native"
import {
    strongGrey,
    mediumGrey,
    mediumWhite,
    strongWhite,
    black,
    champagne,
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
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: champagne,
        width: deviceWidth,
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: hexToRGBA(strongGrey, 0.97),
        shadowColor: black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flexDirection: "row",
    },

    drBox: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    safeDrBox: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flexDirection: "row",
        left: 0,
        right: 0,
        bottom: 0,
    },
    drText: {
        color: strongWhite,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: champagne,
        textShadowOffset: {width: -1, height: -1},
        textShadowRadius: 4,
        paddingBottom: 10,
        alignSelf: "center",
    },
    toggleButton: {
        marginLeft: deviceWidth * 0.05,
        width: "20%",
        marginBottom: 15,
        zIndex: 3,
    },
    switchBtnText: {
        color: "white",
        fontSize: 16,
    },
    spyGlass: {
        paddingRight: 20,
    },
    searcher: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 5,
    },
})

export default styles
