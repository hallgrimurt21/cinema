import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {
    strongGrey,
    mediumGrey,
    strongWhite,
    mediumWhite,
    black,
} from "../../styles/colors"
import hexToRGBA from "../../styles/hexToRgba"

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "column",
        position: "absolute",
        width: deviceWidth,
        zIndex: 1,
    },
    padder: {
        width: "100%",
        height: 100,
        backgroundColor: hexToRGBA(strongGrey, 0.95),
        marginTop: -100,
    },
    info: {
        marginTop: 10,
        padding: 10,
        backgroundColor: hexToRGBA(mediumGrey, 0.95),
        borderRadius: 15,
        shadowColor: black,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        width: deviceWidth - 20,
        alignSelf: "center",
        borderColor: "rgba(220, 20, 60, 0.25)",
        borderWidth: 1,
    },
    topPart: {
        backgroundColor: hexToRGBA(strongGrey, 0.95),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "#C9B082",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 7,
        },
    },

    backButton: {
        marginLeft: 10,
        width: deviceWidth / 5,
        padding: 5,
        borderRadius: 10,
    },
    backBtnText: {
        color: strongWhite,
        fontSize: 18,
        textAlign: "center",
    },
    infoButton: {
        height: 40,
        width: deviceWidth / 5,
        padding: 5,
        paddingTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
    },

    infoButtonToggled: {
        height: 40,
        width: deviceWidth / 5,
        padding: 5,
        paddingTop: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        shadowColor: black,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },

    animButton: {
        marginBottom: 10,
        borderRadius: 10,
        overflow: "hidden",
        width: deviceWidth / 5,
        marginRight: 10,
        borderWidth: 1,
    },
    infoButText: {
        color: strongWhite,
        fontSize: 18,
    },

    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: strongWhite,
        textAlign: "center",
    },
    description: {
        fontSize: 15,
        color: mediumWhite,
    },
    address: {
        fontSize: 15,
        color: mediumWhite,
    },
    phone: {
        fontSize: 15,
        color: mediumWhite,
    },
    website: {
        fontSize: 15,
        color: mediumWhite,
    },

    bottomPart: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftPart: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    rightPart: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
})

export default styles
