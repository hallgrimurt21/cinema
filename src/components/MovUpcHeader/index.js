/* eslint-disable require-jsdoc */
import React from "react"
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native"
import {useDispatch, useSelector} from "react-redux"

import {clearSelected} from "../../redux/features/dropDownSlice"
import {clearSearch} from "../../redux/features/searchSlice"
import {toggleShowUpcoming} from "../../redux/features/toggle"
import GenresDropDown from "../GenresDropDown"
import OpenSearchButton from "../../components/OpenSearchButton"
import SearchBar from "../../components/SearchBar"
import styles from "./styles"

function MovUpcHeader({}) {
    const dispatch = useDispatch()
    const showUpcoming = useSelector((state) => state.toggle.showUpcoming)
    const searchStatus = useSelector((state) => state.search.status)

    const toggleMovies = () => {
        dispatch(toggleShowUpcoming())
        dispatch(clearSearch())
        dispatch(clearSelected())
    }
    return (
        <View style={styles.overContainer}>
            <SafeAreaView style={styles.safeContainer}>
                {searchStatus === "closed" && ( // if search is closed, show toggle button
                    <TouchableOpacity
                        onPress={toggleMovies}
                        style={styles.toggleButton}
                    >
                        <Text style={styles.switchBtnText}>
                            {showUpcoming ? "Showing" : "Upcoming"}
                        </Text>
                    </TouchableOpacity>
                )}
                <SafeAreaView style={styles.safeDrBox}>
                    <Text style={styles.drText}>Dr.Cinema</Text>
                </SafeAreaView>
                <View style={{flex: 1}} />
                <GenresDropDown />
                <OpenSearchButton style={styles.spyGlass} />

                {searchStatus !== "closed" && ( // if search is open, show search bar
                    <SearchBar style={styles.searcher} />
                )}
            </SafeAreaView>
        </View>
    )
}

export default MovUpcHeader
