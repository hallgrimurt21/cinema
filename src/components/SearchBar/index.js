import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {
    TextInput,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from "react-native"
import {updateSearchTerm, closeSearch} from "../../redux/features/searchSlice"
import styles from "./styles"

const SearchBar = () => {
    const searchTerm = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.textInput}
                    value={searchTerm}
                    onChangeText={(term) => dispatch(updateSearchTerm(term))}
                    onBlur={() => dispatch(closeSearch())}
                    placeholder="Search..."
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity onPress={() => dispatch(closeSearch())}>
                    <Image
                        style={styles.searchImage}
                        source={require("../../resources/images/searchIcon.png")}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SearchBar
