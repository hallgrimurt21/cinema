import React from "react"
import {View, Text} from "react-native"
import CinemaList from "../../components/CinemaList"

const AllCinemas = () => {
    return (
        <View>
            <Text>List of Cinemas</Text>
            <CinemaList />
        </View>
    )
}

export default AllCinemas
