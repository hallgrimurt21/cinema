import YoutubeIframe from "react-native-youtube-iframe"
import React from "react"
import {View, Pressable, Text} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import styles from "./styles"
import {OPEN_MODAL, CLOSE_MODAL} from "../../constants/constants"
import {useNavigation} from "@react-navigation/native"

const Trailer = ({route}) => {
    const {trailerID} = route.params
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handleStateChange = (event) => {
        if (event === "ended") {
            dispatch({type: CLOSE_MODAL})
        }
    }

    const visibleTrailer = useSelector(
        (state) => state.modal.modalVisible)


    handleNavigate = () => {
        return () => {
            dispatch({type: CLOSE_MODAL})
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.close}
                onPress={handleNavigate()}
            >
                <Text style={styles.closeText}>Close Trailer</Text>
            </Pressable>
            <View style={styles.trailer}>
                <YoutubeIframe
                    height={300}
                    play={visibleTrailer}
                    videoId={trailerID}
                    onChangeState={handleStateChange}
                    backgroundColor="black"
                />
            </View>

        </View>
    )
}


export default Trailer
