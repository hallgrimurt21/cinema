import {StyleSheet} from "react-native"

import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    container: {
        marginRight: deviceWidth * 0.01,
        width: "20%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: "7%",
        marginBottom: 10,
    },
})

export default styles
