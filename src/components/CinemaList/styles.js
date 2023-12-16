import {StyleSheet} from "react-native"

import {
    black,
    champagne,
    mediumGrey,
    mediumWhite,
    strongGrey,
    strongWhite,
} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    container: {
        backgroundColor: strongGrey,
    },
    cinemaContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        height: deviceWidth / 5,
        alignItems: "center",
        flex: 1,
    },

    linkContainer: {
        backgroundColor: mediumGrey,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 20,
        elevation: 1,
        height: "auto",
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
        borderBottomWidth: 0.5,
        borderColor: champagne,
        height: deviceWidth / 5,
        backgroundColor: mediumGrey,
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
    linkTextCont: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: strongGrey,
    },
})

export default styles
