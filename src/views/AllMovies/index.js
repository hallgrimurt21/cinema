import React from "react"
import {TouchableWithoutFeedback, View} from "react-native"
import {useFocusEffect} from "@react-navigation/native"
import {useDispatch, useSelector} from "react-redux"


import {clearSearch, closeSearch} from "../../redux/features/searchSlice"
import CinemaMovies from "../../components/CinemaMovies"
import MovUpcHeader from "../../components/MovUpcHeader"
import UpcomingMovies from "../../components/UpcomingMovies"
import styles from "./styles"

const AllMovies = () => {
    const dispatch = useDispatch()
    const showUpcoming = useSelector((state) => state.toggle.showUpcoming)
    const searchStatus = useSelector((state) => state.search.status)
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

export default AllMovies
