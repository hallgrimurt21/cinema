/* eslint-disable max-len */
import React, {useEffect, useState} from "react"
import {View, Text, Pressable} from "react-native"
import {useSelector} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import {SafeAreaView} from "react-native-safe-area-context"
import YoutubePlayer from "react-native-youtube-iframe"


const UpcomingDetail = ({id}) => {
    const navigate = useNavigation().navigate
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies)
    const upcoming = upcomingMovies.find((movie) => movie._id === id)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        return () => {
            setIsMounted(false)
        }
    }, [])


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
                {isMounted && upcoming.trailers && upcoming.trailers[0] && upcoming.trailers[0].results && upcoming.trailers[0].results[0] && upcoming.trailers[0].results[0].key && (
                    <YoutubePlayer
                        height={300}
                        play={false}
                        videoId={upcoming.trailers[0].results[0].key}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default UpcomingDetail
