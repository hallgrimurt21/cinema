import React from "react"
import {View, Text, TouchableOpacity, SafeAreaView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {clearSearch} from "../../redux/features/searchSlice"
import {toggleShowUpcoming} from "../../redux/features/toggle"
import SearchBar from "../../components/SearchBar"
import OpenSearchButton from "../../components/OpenSearchButton"
import styles from "./styles"
import GenresDropDown from "../GenresDropDown"

function MovUpcHeader({}) {
    const dispatch = useDispatch()
    const showUpcoming = useSelector((state) => state.toggle.showUpcoming)
    const searchStatus = useSelector((state) => state.search.status)

    const toggleMovies = () => {
        dispatch(toggleShowUpcoming()) // Dispatch the action
        dispatch(clearSearch())
    }
    return (
        <View style={styles.overContainer}>
            <SafeAreaView style={styles.safeContainer}>
                {searchStatus === "closed" && (
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

                {searchStatus !== "closed" && (
                    <SearchBar style={styles.searcher} />
                )}
            </SafeAreaView>
        </View>
    )
}

export default MovUpcHeader
