import React from "react"
import {TouchableOpacity} from "react-native"
import {useDispatch} from "react-redux"
import Icon from "react-native-vector-icons/MaterialIcons"

import {openSearch} from "../../redux/features/searchSlice"
import styles from "./styles"

const OpenSearchButton = () => {
    const dispatch = useDispatch()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => dispatch(openSearch())}
        >
            <Icon name="search" size={30} color="#fff" />
        </TouchableOpacity>
    )
}

export default OpenSearchButton
