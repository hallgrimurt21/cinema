import React from "react"
import {View, Text} from "react-native"
import {useSelector} from "react-redux"

const CinemaDetails = ({id}) => {
    const cinemas = useSelector((state) => state.cinemas.cinemas)
    const cinema = cinemas.find((cinema) => cinema.id === id)
    return (
        <View>
            <Text>{cinema.name}</Text>
            <Text>{cinema.description}</Text>
            <Text>{cinema["address\t"]}, {cinema.city}</Text>
            <Text>{cinema.phone}</Text>
            <Text>{cinema.website}</Text>
        </View>
    )
}

export default CinemaDetails
