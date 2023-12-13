import {StyleSheet} from "react-native"
import {
    strongGrey,
    mediumGrey,
    mediumWhite,
    strongWhite,
    black,
} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    container: {
        backgroundColor: strongGrey,
    },
    cinemaContainer: {
        marginLeft: 10,
        backgroundColor: mediumGrey,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        height: deviceWidth / 5,
        alignItems: "center",
        flex: 1,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },

    linkContainer: {
        width: deviceWidth / 2.5,
        backgroundColor: mediumGrey,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        height: deviceWidth / 5,
        alignItems: "center",
        shadowColor: strongGrey,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginRight: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
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
})

export default styles
