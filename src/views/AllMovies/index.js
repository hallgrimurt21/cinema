import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import MainHeader from "../../components/MainHeader"
import styles from "./styles"
import CinemaMovies from "../../components/CinemaMovies"

const AllMovies = ({navigation}) => {
    const navigate = navigation.navigate
    return (
        <View style={styles.container}>
            <MainHeader />
            <TouchableOpacity onPress={() => navigate("Upcoming Movies Screen")}>
                <Text style={{color: "white", marginTop: 100, fontSize:15}}>Upcoming Movies</Text>
            </TouchableOpacity>
            <CinemaMovies />
        </View>
    )
}

export default AllMovies
