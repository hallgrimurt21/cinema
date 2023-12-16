import {StyleSheet} from "react-native"

import {champagne} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    searchBar: {
        position: "absolute",
        height: 50,
        flexDirection: "row",
        backgroundColor: "black",
        width: deviceWidth * 0.9,
        borderRadius: 30,
        borderColor: champagne,
        borderWidth: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        bottom: -24,
        zIndex: 4,
        right: deviceWidth * 0.05,
    },
    textInput: {
        marginLeft: 10,
        alignSelf: "center",
        flex: 1,
        color: "white",
        paddingHorizontal: 10,
        fontSize: 16,
        zIndex: 4,
    },
    searchImage: {
        marginRight: 20,
    },
})

export default styles
