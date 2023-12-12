import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {
    mediumWhite,
    mediumGrey,
    strongGrey,
    strongWhite,
} from "../../styles/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: strongGrey,
    },
    poster: {
        width: deviceWidth,
        height: deviceWidth * 1.5,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: strongWhite,
        textAlign: "right",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
    },
    year: {
        fontSize: 20,
        color: strongWhite,
        textAlign: "right",
        backgroundColor: "rgba(0,0,0,0.5)",
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
})

export default styles
