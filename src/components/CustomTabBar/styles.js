import {StyleSheet} from "react-native"

import {
    champagne,
} from "../../styles/colors"
import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "black",
        height: 50,
        width: deviceWidth * 0.9,
        borderRadius: 30,
        marginTop: -50,
        bottom: 18,
        borderColor: champagne,
        borderWidth: 1,
        overflow: "hidden",
    },
})

export default styles
