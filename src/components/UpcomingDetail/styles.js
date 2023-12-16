import {StyleSheet} from "react-native"

import {
    mediumWhite,
    mediumGrey,
    strongGrey,
    strongWhite,
    crimson,
} from "../../styles/colors"
import {deviceHeight, deviceWidth} from "../../styles/sizes"

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
    plot: {
        color: mediumWhite,
        textAlign: "center",
        padding: 10,
    },
    genre: {
        color: mediumWhite,
        fontSize: 20,
        textAlign: "center",
        padding: 10,
    },
    allShows: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 10,
    },
    showtime: {
        backgroundColor: mediumGrey,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "33.33%",
    },
    genres: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#000000",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    botButton: {
        backgroundColor: mediumGrey,
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    botButText: {
        color: mediumWhite,
    },
    time: {
        color: mediumWhite,
        fontSize: 15,
    },
    buy: {
        color: mediumWhite,
        fontSize: 10,
    },
    ytContainer: {
        flexDirection: "row",
    },

    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: "100%",
        height: 200,
        backgroundColor: crimson,
    },
    trailerButton: {
        backgroundColor: mediumGrey,
        marginTop: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    extraView: {
        height: deviceHeight,
    },
})

export default styles
