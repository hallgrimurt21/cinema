import React from "react"
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
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


const AllMovies = ({navigation}) => {
    const navigate = navigation.navigate
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
    const toggleMovies = () => {
        dispatch(toggleShowUpcoming()) // Dispatch the action
    }
    return (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={styles.container}>
                {searchStatus !== "closed" && <SearchBar />}
                <OpenSearchButton />
                <MainHeader />
                <TouchableOpacity onPress={toggleMovies} style={styles.toggleButton}></TouchableOpacity>
                <Text style={{color: "white", marginTop: 35, fontSize: 15}}>
                    {showUpcoming ? "Show\nCinema" : "Show\nUpcoming"}
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(clearSearch())}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
                <GenresDropDown />
                {showUpcoming ? <UpcomingMovies /> : <CinemaMovies />}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AllMovies
