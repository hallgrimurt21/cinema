import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {View, Text} from "react-native"
import {fetchCinemas} from "../../redux/features/cinema"

const CinemaList = () => {
    const dispatch = useDispatch()
    const cinemas = useSelector((state) => state.cinema.cinemas)

    useEffect(() => {
        dispatch(fetchCinemas())
    }, [dispatch])

    return (
        console.log("cinemas", cinemas),
        <View>
            <Text>List of Cinemas</Text>
            {cinemas.map((cinema, index) => (
                <Text key={index}>{cinema.title}</Text>
            ))}
        </View>
    )
}

export default CinemaList
