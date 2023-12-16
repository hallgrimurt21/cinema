import React from "react"
import {TouchableWithoutFeedback, View} from "react-native"
import {useFocusEffect} from "@react-navigation/native"
import {useDispatch, useSelector} from "react-redux"

import {clearSelected} from "../../redux/features/dropDownSlice"
import {clearSearch, closeSearch} from "../../redux/features/searchSlice"
import CinemaMovies from "../../components/CinemaMovies"
import MovUpcHeader from "../../components/MovUpcHeader"
import UpcomingMovies from "../../components/UpcomingMovies"
import styles from "./styles"

const AllMovies = () => {
    const dispatch = useDispatch()
    const showUpcoming = useSelector((state) => state.toggle.showUpcoming) // get the showUpcoming state from the redux store
    const searchStatus = useSelector((state) => state.search.status) // get the search status from the redux store
    const handleOutsidePress = () => { // handles closing the search bar when the user clicks outside of it
        if (searchStatus !== "closed") {
            dispatch(closeSearch())
        }
    }
    // clear search when the screen loses focus ///
    useFocusEffect( // useFocusEffect is a react-navigation hook that runs when the screen gains focus
        React.useCallback(() => {
            return () => {
                dispatch(clearSearch())
                dispatch(clearSelected())
            }
        }, [dispatch]),
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
