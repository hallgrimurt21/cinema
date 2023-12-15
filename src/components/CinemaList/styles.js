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

const styles = StyleSheet.create({
    container: {
        backgroundColor: black,
    },
    cinemaContainer: {
        backgroundColor: mediumGrey,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        height: deviceWidth / 5,
        alignItems: "center",
        flex: 1,
    },

    linkContainer: {
        width: deviceWidth / 2.5,
        backgroundColor: mediumGrey,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        height: deviceWidth / 5,
        alignItems: "center",
        borderLeftWidth: 1,
        borderColor: strongGrey,
        elevation: 1,
    },

    buttons: {
        flexDirection: "row",
        width: deviceWidth,
        marginBottom: 10,
        shadowColor: black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderBottomWidth: 0.4,
        // borderColor: champagne,
    },

    cinemaName: {
        color: strongWhite,
        fontSize: 20,
        fontWeight: "bold",
    },
    cinemaWebsite: {
        fontSize: 16,
        color: mediumWhite,
    },

    centerElement: {
        borderColor: "red",
        borderWidth: 2,
    },
})

export default styles
