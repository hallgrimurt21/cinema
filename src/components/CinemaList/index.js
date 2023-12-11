import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {View, Text, TouchableOpacity} from "react-native"
import {fetchCinemas} from "../../redux/features/allCinemas"
import {useNavigation} from "@react-navigation/native"

const CinemaList = () => {
    const navigate = useNavigation().navigate
    const dispatch = useDispatch()
    const cinemas = useSelector((state) => state.allCinemas.cinemas)

    useEffect(() => {
        dispatch(fetchCinemas())
    }, [dispatch])

    return (
        <View>
            {cinemas.map((cinema, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => navigate("Cinema", {id: cinema.id})}
                >
                    <Text>{cinema.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default CinemaList
