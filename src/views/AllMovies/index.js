import React from "react"
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {useFocusEffect} from "@react-navigation/native"
import {closeSearch, clearSearch} from "../../redux/features/searchSlice"
import MainHeader from "../../components/MainHeader"
import CinemaMovies from "../../components/CinemaMovies"
import SearchBar from "../../components/SearchBar"
import OpenSearchButton from "../../components/OpenSearchButton"
import styles from "./styles"
import GenresDropDown from "../../components/GenresDropDown"


const AllMovies = ({navigation}) => {
    const navigate = navigation.navigate
    const dispatch = useDispatch()
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
                {searchStatus !== "closed" && <SearchBar />}
                <OpenSearchButton />
                <MainHeader />
                <TouchableOpacity
                    onPress={() => {
                        dispatch(closeSearch())
                        navigate("Upcoming Movies Screen")
                    }}
                >
                    <Text style={{color: "white", marginTop: 100, fontSize: 15}}>
                        Upcoming Movies
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(clearSearch())}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
                <GenresDropDown />
                <CinemaMovies />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AllMovies
