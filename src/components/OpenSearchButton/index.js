import React from "react"
import {useDispatch} from "react-redux"
import {TouchableOpacity, Image} from "react-native"
import {openSearch} from "../../redux/features/searchSlice"
import styles from "./styles"

const OpenSearchButton = () => {
    const dispatch = useDispatch()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => dispatch(openSearch())}
        >
            <Image
                style={styles.image}
                source={require("../../resources/images/searchIcon.png")}
            />
        </TouchableOpacity>
    )
}

export default OpenSearchButton
