import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {
    mediumWhite,
    mediumGrey,
    strongGrey,
    strongWhite,
    crimson,
} from "../../styles/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: strongGrey,
    },
    header: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        height: deviceWidth * 0.25,
        alignItems: "flex-end",
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    safe: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rightInfo: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    back: {
        color: strongWhite,
        fontSize: 20,
    },
    poster: {
        width: deviceWidth,
        height: deviceWidth * 1.5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: strongWhite,
        textAlign: "right",
        width: "100%",
    },
    year: {
        fontSize: 15,
        color: strongWhite,
        textAlign: "right",
        width: "100%",
    },
})

export default styles