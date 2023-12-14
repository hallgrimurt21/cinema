import React from "react"
import {View, Text, TouchableOpacity, Image} from "react-native"
import MainHeader from "../../components/MainHeader"
import styles from "./styles"
import CinemaMovies from "../../components/CinemaMovies"
import SearchBar from "../../components/SearchBar"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {openSearch} from "../../redux/features/searchSlice"

const AllMovies = ({navigation}) => {
    const navigate = navigation.navigate
    const dispatch = useDispatch()
    const searchStatus = useSelector((state) => state.search.status)
    return (
        <View style={styles.container}>
            {searchStatus !== "closed" && <SearchBar />}
            <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => dispatch(openSearch())}
            >
                <Image
                    style={styles.clickableImage}
                    source={require("../../resources/images/searchIcon.png")}
                />
            </TouchableOpacity>
            <MainHeader />
            <TouchableOpacity
                onPress={() => navigate("Upcoming Movies Screen")}
            >
                <Text style={{color: "white", marginTop: 100, fontSize: 15}}>
                    Upcoming Movies
                </Text>
            </TouchableOpacity>
            <CinemaMovies />
        </View>
    )
}

export default AllMovies
