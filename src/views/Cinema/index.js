import React, {useEffect} from "react"
import {View, Text} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {getCinema} from "../../redux/features/cinema"

const Cinema = ({route}) => {
    const {id} = route.params
    const dispatch = useDispatch()
    const cinema = useSelector((state) => state.cinema)

    useEffect(() => {
        dispatch(getCinema(id))
    }, [dispatch, id])
    console.log(cinema)
    return (
        <View>
            <Text>{cinema.name}</Text>
            <Text>{cinema.description}</Text>
            <Text>{cinema.address}</Text>
            <Text>{cinema.phone}</Text>
            <Text>{cinema.website}</Text>
        </View>
    )
}

export default Cinema
