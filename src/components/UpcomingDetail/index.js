import React from "react"
import {View, ScrollView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import styles from "../../views/Movie/styles"
import UpcomingHeader from "../UpcomingHeader"
import ButtonRowUpcoming from "../ButtonRowUpcoming"
import {hideAll} from "../../redux/features/visibilitySlice"

const UpcomingDetail = ({id}) => {
    const navigation = useNavigation()
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies)
    const dispatch = useDispatch()
    const upcoming = upcomingMovies.find((movie) => movie._id === id)

    const handleNavigate = () => {
        return () => {
            dispatch(hideAll())
            navigation.goBack()
        }
    }

    return (
        <View style={styles.extraView}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 100}}
                style={{...styles.container, flex: 1}}
            >
                <UpcomingHeader
                    upcoming={upcoming}
                    handleNavigate={handleNavigate}
                />
                <ButtonRowUpcoming movie={upcoming} />
            </ScrollView>
        </View>
    )
}

export default UpcomingDetail
