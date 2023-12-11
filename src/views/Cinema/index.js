import React from "react"
import {View} from "react-native"
import CinemaDetails from "../../components/CinemaDetails"

const Cinema = ({route}) => {
    const {id} = route.params
    console.log(id)
    return (
        <View>
            <CinemaDetails id={id} />
        </View>
    )
}

export default Cinema
