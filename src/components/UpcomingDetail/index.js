import React from "react"
import {View, Text, Pressable} from "react-native"
import {useSelector} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import {SafeAreaView} from "react-native-safe-area-context"

const UpcomingDetail = ({route}) => {
    const {id} = route.params
    console.log("id: ", id)
    const navigate = useNavigation().navigate
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies)
    const upcoming = upcomingMovies.find((movie) => movie._id === id)


    console.log("upcoming 1: ", upcoming)


    console.log("upcoming 2: ", upcoming)

    if (!upcoming) {
        return <Text>Loading...</Text>
    }

    return (
        <SafeAreaView>
            <View>
                <Pressable onPress={navigate.goBack}>
                    <Text>Back</Text>
                </Pressable>
                <Text>{upcoming.title}</Text>
                <Text>{upcoming["release-dateIS"]}</Text>
            </View>
        </SafeAreaView>


    )
}

export default UpcomingDetail
