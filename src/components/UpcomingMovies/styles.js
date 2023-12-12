import {StyleSheet} from "react-native"
import {Dimensions} from "react-native"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    movieContainer: {
        backgroundColor: "gold",
        width: windowWidth,
        height: windowHeight / 8,
        padding: 10,
        borderBottomWidth: 4,
        borderBottomColor: "#ccc",
    },
    movieTitle: {
        color: "crimson",
        fontSize: 20,
        fontWeight: "bold",
    },
    poster: {
        width: 100,
        height: 100,
    },
})

export default styles
