import {StyleSheet} from "react-native"
import {deviceWidth} from "../../styles/sizes"
import {
    strongGrey,
    mediumGrey,
    strongWhite,
    mediumWhite,
    black,
} from "../../styles/colors"

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
        borderColor: "#C9B082",
        borderWidth: 1,
        overflow: "hidden",
    },
})

export default styles
