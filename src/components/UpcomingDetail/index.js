import React, {useEffect} from "react"
import {View, Text} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {fetchUpcomingMovieByID} from "../../redux/features/upcomingMovieOne"

const UpcomingDetail = ({id}) => {
    const dispatch = useDispatch()
    const upcoming = useSelector((state) => state.upcoming)

    console.log("upcoming 1: ", upcoming)
    useEffect(() => {
        dispatch(fetchUpcomingMovieByID(id))
    }, [dispatch, id])

    console.log("upcoming 2: ", upcoming)

    if (!upcoming) {
        return <Text>Loading...</Text>
    }
    return (
        <View>
            <Text>{upcoming.title}</Text>
            <Text>{upcoming["release-dateIS"]}</Text>
        </View>
    )
}

export default UpcomingDetail
