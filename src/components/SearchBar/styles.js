import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {champagne} from "../../styles/colors"

const styles = StyleSheet.create({
    searchBar: {
        zIndex: 3,
        position: "absolute",
        top: 50,
        height: 50,
        borderWidth: 1,
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "black",
        width: deviceWidth * 0.9,
        borderRadius: 30,
        borderColor: champagne,
        borderWidth: 1,
        overflow: "hidden",
    },
    textInput: {
        flex: 1,
        height: "100%",
        backgroundColor: "black",
        color: "white",
        paddingHorizontal: 10,
        fontSize: 16,
    },
    searchImage: {
        width: 70,
        height: 50,
        marginRight: -5,
    },
})

export default styles
