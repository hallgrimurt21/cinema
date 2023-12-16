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
import UpcomingMovies from "../../components/UpcomingMovies"
import CinemaMovies from "../../components/CinemaMovies"
import styles from "./styles"
import GenresDropDown from "../../components/GenresDropDown"
import MovUpcHeader from "../../components/MovUpcHeader"

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

    //================== old code ==================//
    // const ClearnOrDropDown = () => {
    //     if (searchValue) {
    //         return (
    //             <TouchableOpacity onPress={() => dispatch(clearSearch())}>
    //                 <Text style={styles.clearText}>Clear</Text>
    //             </TouchableOpacity>
    //         )
    //     } else {
    //         return <GenresDropDown />
    //     }
    // }
    //===============================================//

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
