import React from "react"
import {View, Text} from "react-native"
import {useSelector} from "react-redux"

const CinemaDetails = ({id}) => {
    const cinemas = useSelector((state) => state.cinemas.cinemas)
    const cinema = cinemas.find((cinema) => cinema.id === id)
    return (
        <View style={styles.container}>
            <Text style={styles.cinemaName}>{cinema.name}</Text>
            <Text style={styles.cinemaDescription}>{cinema.description}</Text>
            <Text style={styles.address}>{cinema.address}</Text>
            <Text style={styles.phone}>{cinema.phone}</Text>
            <Text style={styles.cinemaWebsite}>{cinema.website}</Text>
        </View>
    )
}

export default CinemaDetails
