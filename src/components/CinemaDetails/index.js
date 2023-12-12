import React, {useEffect} from "react"
import {View, Text} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {getCinema} from "../../redux/features/cinema"
import styles from "./styles"

const CinemaDetails = ({id}) => {
    const dispatch = useDispatch()
    const cinema = useSelector((state) => state.cinema)

    useEffect(() => {
        dispatch(getCinema(id))
    }, [dispatch, id])
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
