import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    poster: {
        width: deviceWidth,
        height: deviceWidth * 1.5,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "right",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
    },
    year: {
        fontSize: 20,
        color: "white",
        textAlign: "right",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
    },
    plot: {
        color: "black",
        textAlign: "center",
        padding: 10,
    },
    genre: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        padding: 10,
    },
    allShows: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    showtime: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    genres: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
})

export default styles
