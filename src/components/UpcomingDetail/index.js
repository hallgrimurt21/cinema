import React from "react"
import {ScrollView, View} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {useDispatch, useSelector} from "react-redux"

import {hideAll} from "../../redux/features/visibilitySlice"
import ButtonRowUpcoming from "../ButtonRowUpcoming"
import UpcomingHeader from "../UpcomingHeader"
import styles from "./styles"

const UpcomingDetail = ({id}) => { // redirects to UpcomingHeader and ButtonRowUpcoming components
    const navigation = useNavigation() // get the navigation prop from useNavigation hook
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies) // get the upcomingMovies state from the redux store
    const dispatch = useDispatch() // get the dispatch function from useDispatch hook
    const upcoming = upcomingMovies.find((movie) => movie._id === id) // get the upcoming movie from the redux store

    const handleNavigate = () => { // handles navigating back to the previous screen
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
