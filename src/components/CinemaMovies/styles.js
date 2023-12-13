import {StyleSheet} from "react-native"
import {
    strongGrey,
    mediumGrey,
    mediumWhite,
    strongWhite,
    crimson,
} from "../../styles/colors"

export default StyleSheet.create({
    card: {
        backgroundColor: mediumGrey,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    poster: {
        marginVertical: -3,
        width: 100,
        height: 175,
        borderRadius: 10,
    },
    info: {
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: strongWhite,
    },
    year: {
        fontSize: 15,
        color: mediumWhite,
    },
    genre: {
        fontSize: 15,
        color: mediumWhite,
    },
    titleView: {
        flex: 1,
    },
    genres: {
        flexDirection: "column",
        flexWrap: "wrap",
    },
    bottomPart: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
})
