import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {View, Text, TouchableOpacity} from "react-native"
import {fetchCinemas} from "../../redux/features/allCinemas"
import {useNavigation} from "@react-navigation/native"
import styles from "./styles"
import {ScrollView} from "react-native-gesture-handler"

const CinemaList = () => {
    const navigate = useNavigation().navigate
    const dispatch = useDispatch()
    const cinemas = useSelector((state) => state.allCinemas.cinemas)

    useEffect(() => {
        dispatch(fetchCinemas())
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                {cinemas.map((cinema, index) => (
                    <TouchableOpacity
                        style={styles.cinemaContainer}
                        key={index}
                        onPress={() => navigate("Cinema", {id: cinema.id})}
                    >
                        <Text style={styles.cinemaName}>{cinema.name}</Text>
                        <Text style={styles.cinemaWebsite}>{cinema.website}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default CinemaList
