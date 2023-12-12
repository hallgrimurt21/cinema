import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        margin: 10,
        color: "white",
    },

    image: {
        width: deviceWidth,
        height: 500,
        alignSelf: "center",
    },

    info: {
        fontSize: 16,
        textAlign: "center",
        margin: 10,
    },

    genreBox: {
        flexDirection: "row",
        justifyContent: "center",
    },

    genre: {
        fontSize: 16,
        margin: 10,
    },

    showtime: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },

    time: {
        fontSize: 16,
    },

    buy: {
        fontSize: 16,
        color: "blue",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default styles
