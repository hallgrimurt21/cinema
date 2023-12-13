import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import MainHeader from "../../components/MainHeader"
import styles from "./styles"

const AllMovies = ({navigation}) => {
    const navigate = navigation.navigate
    return (
        <View style={styles.container}>
            <MainHeader />
            <Text style={{color: "white", marginTop: 100}}>Movies</Text>
            <TouchableOpacity onPress={() => navigate("Upcoming Movies Screen")}>
                <Text style={{color: "white", marginTop: 100}}>Upcoming Movies</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AllMovies
