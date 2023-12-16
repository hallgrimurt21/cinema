import React from "react"
import {SafeAreaView, TextInput, TouchableOpacity, View} from "react-native"
import {useDispatch, useSelector} from "react-redux"

import {closeSearch, updateSearchTerm} from "../../redux/features/searchSlice"
import styles from "./styles"
import Icon from "react-native-vector-icons/MaterialIcons"

const SearchBar = () => { // search bar component
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
                    <Icon
                        style={styles.searchImage}
                        name="search"
                        size={25}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SearchBar
