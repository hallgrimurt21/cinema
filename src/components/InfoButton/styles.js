import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {
    mediumWhite,
    mediumGrey,
    strongGrey,
    strongWhite,
    champagne,
    black,
} from "../../styles/colors"
import hexToRGBA from "../../styles/hexToRgba"

const buttonCore = {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderLeftColor: hexToRGBA(black, 0.25),
    borderLeftWidth: 1,
}

const showButtonCore = {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: champagne,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "33.33%",
    marginTop: -1,
    marginRight: -1,
    borderLeftColor: hexToRGBA(black, 0.4),
    borderTopColor: hexToRGBA(black, 0.5),
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: strongGrey,
    },
    // ==================== HEADER ==================== //
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
    // ==================== PLOT ==================== //
    plot: {
        color: mediumWhite,
        textAlign: "left",
        fontSize: 16,
        backgroundColor: mediumGrey,
        textShadowColor: black,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 5,
        padding: 10,
    },

    plotBox: {
        width: deviceWidth * 0.97,
        backgroundColor: mediumGrey,
        marginTop: 10,
        alignSelf: "center",
        padding: 17,
        borderBottomWidth: 1,
        borderColor: champagne,
    },
    // ==================== GENRES ==================== //
    genres: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: mediumGrey,
        borderBottomWidth: 1,
        borderColor: champagne,
        width: deviceWidth * 0.97,
        alignSelf: "center",
    },
    genre: {
        color: mediumWhite,
        fontSize: 20,
        textAlign: "center",
        padding: 10,
    },
    // ==================== SHOWTIMES ==================== //
    allShows: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginTop: 10,
        marginRight: -4,
        width: deviceWidth * 0.97,
        alignSelf: "center",
    },
    showtime: {
        ...showButtonCore,
        backgroundColor: mediumGrey,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        marginRight: -3,
        height: 65,
    },

    pressedShowtime: {
        ...showButtonCore,
        backgroundColor: strongGrey,
        borderColor: strongGrey,
        borderTopColor: strongGrey,
        borderLeftColor: strongGrey,
        borderWidth: 8,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        zIndex: 1,
        shadowColor: black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },

    time: {
        color: mediumWhite,
        fontSize: 15,
    },
    buy: {
        color: mediumWhite,
        fontSize: 10,
    },
    // ==================== BUTTONS ==================== //
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
        ...buttonCore,
        backgroundColor: mediumGrey,
    },
    activeButton: {
        ...buttonCore,
        backgroundColor: strongGrey,
        borderBottomWidth: 1,
        borderColor: champagne,
    },

    botButText: {
        color: mediumWhite,
        fontSize: 16,
    },

    activeButtonText: {
        color: strongWhite,
        fontSize: 16,
    },

    // ==================== TRAILER ==================== //
    ytContainer: {
        flexDirection: "row",
    },

    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    trailerButton: {
        backgroundColor: mediumGrey,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
})

export default styles
