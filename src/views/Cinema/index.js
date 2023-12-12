import React from "react"
import {View} from "react-native"
import CinemaDetails from "../../components/CinemaDetails"
import CinemaMovies from "../../components/CinemaMovies"

const Cinema = ({route}) => {
    const {id} = route.params
    return (
        <View>
            <CinemaDetails id={id} />
            <CinemaMovies id={id} />
        </View>
    )
}

export default Cinema
