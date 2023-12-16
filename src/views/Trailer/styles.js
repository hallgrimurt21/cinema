import {StyleSheet} from "react-native"

import {deviceWidth} from "../../styles/sizes"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    trailer: {
        width: deviceWidth,
        height: 300,
    },
    close: {
        position: "absolute",
        top: 10,
        left: 10,
    },
    closeText: {
        color: "white",
        fontSize: 20,
    },
});

export default styles
