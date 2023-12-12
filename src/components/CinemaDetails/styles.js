import {StyleSheet} from "react-native"
import {Dimensions} from "react-native"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    cinemaContainer: {
        backgroundColor: "gold",
        width: windowWidth,
        height: windowHeight / 8,
        padding: 10,
        borderBottomWidth: 4,
        borderBottomColor: "#ccc",
    },
    cinemaName: {
        color: "navy",
        fontSize: 20,
        fontWeight: "bold",
    },
    cinemaWebsite: {
        fontSize: 16,
        color: "blue",
    },
    cinemaDescription: {
        fontSize: 14,
    },
})


export default styles
