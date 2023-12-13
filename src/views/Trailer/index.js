import YoutubeIframe from "react-native-youtube-iframe"
import React from "react"
import {View, StyleSheet} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import styles from "./styles"


const Trailer = ({route}) => {
    const {trailerID} = route.params
    const dispatch = useDispatch()

    const handleStateChange = (state) => {
        if (state === "ended") {
            dispatch({type: "HIDE_TRAILER"})
        }
    }

    const visibleTrailer = useSelector(
        (state) => state.visibility.visibleTrailer,
    )

    return (
        <View style={styles.container}>
            <YoutubeIframe
                height={300}
                play={visibleTrailer}
                videoId={trailerID}
                onChangeState={handleStateChange}
                style={{backgroundColor: "black"}}
            />
        </View>
    )
}


export default Trailer
