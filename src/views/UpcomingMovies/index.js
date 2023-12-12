import React from "react"
import {View, Text} from "react-native"
import UpcomingMovies from "../../components/UpcomingMovies"

const UpcomingList = () => {
    return (
        <View>
            <Text>Upcoming Movies</Text>
            <UpcomingMovies />
        </View>
    )
}

export default UpcomingList
