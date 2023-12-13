import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {
    strongGrey,
    mediumGrey,
    strongWhite,
    mediumWhite,
} from "../../styles/colors"

const styles = StyleSheet.create({
    header: {
        backgroundColor: strongGrey,
        justifyContent: "space-between",
        flexDirection: "column",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
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

    backButton: {
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
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: mediumGrey,
    },

    infoButText: {
        color: strongWhite,
        fontSize: 18,
    },
    info: {
        padding: 10,
        backgroundColor: mediumGrey,
    },
    topPart: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
