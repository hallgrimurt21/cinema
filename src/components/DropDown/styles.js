import {StyleSheet} from "react-native"

import {strongGrey, black} from "../../styles/colors"

export const styles = StyleSheet.create({
    overContainer: {backgroundColor: strongGrey, width: "100%", height: "100%"},

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        height: 40,
    },
    text: {
        fontSize: 16,
        color: "white",
    },
    checkbox: {
        alignSelf: "center",
        width: 20,
        height: 20,
        marginLeft: 10,
        color: "white",
        borderColor: "white",
        borderWidth: 1,
    },
    textButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
        paddingRight: 10,
    },

    dropdownStyle: {
        zIndex: 2,
        width: "50%",
        textAlign: "right",
        height: "30%",
        backgroundColor: black,
        borderColor: "transparent",
        borderWidth: 1,
        overflow: "hidden",
        marginTop: 15,
        alignSelf: "flex-end",
        position: "absolute",
        borderRadius: 5,
        left: "51%",
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,

        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
})
