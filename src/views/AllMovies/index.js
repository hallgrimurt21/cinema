import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView,
} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {useFocusEffect} from "@react-navigation/native"
import {closeSearch, clearSearch} from "../../redux/features/searchSlice"
import {toggleShowUpcoming} from "../../redux/features/toggle"
import UpcomingMovies from "../../components/UpcomingMovies"
import MainHeader from "../../components/MainHeader"
import CinemaMovies from "../../components/CinemaMovies"
import SearchBar from "../../components/SearchBar"
import OpenSearchButton from "../../components/OpenSearchButton"
import styles from "./styles"
import GenresDropDown from "../../components/GenresDropDown"
import MovUpcHeader from "../../components/MovUpcHeader"

const AllMovies = ({navigation}) => {
    const navigate = navigation.navigate
    const dispatch = useDispatch()
    const showUpcoming = useSelector((state) => state.toggle.showUpcoming)
    const searchStatus = useSelector((state) => state.search.status)
    const searchValue = useSelector((state) => state.search.value)
    const handleOutsidePress = () => {
        if (searchStatus !== "closed") {
            dispatch(closeSearch())
        }
    }
    // clear search when the screen loses focus ///
    useFocusEffect(
        React.useCallback(() => {
            return () => dispatch(clearSearch())
        }, []),
    )

    return (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={styles.container}>
                <MovUpcHeader />
                {showUpcoming ? <UpcomingMovies /> : <CinemaMovies />}
            </View>
        </TouchableWithoutFeedback>
    )
}

function extra() {
    return (
        <View style={styles.container}>
            {searchStatus !== "closed" && <SearchBar />}
            <OpenSearchButton />
            <SafeAreaView style={styles.safer}>
                <TouchableOpacity
                    onPress={toggleMovies}
                    style={styles.toggleButton}
                >
                    <Text style={styles.switchBtnText}>
                        {showUpcoming ? "Showing" : "Upcoming"}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
            <MainHeader />

            <ClearnOrDropDown />
        </View>
    )
}

export default AllMovies
