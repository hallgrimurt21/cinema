import React from "react"
import {View, ScrollView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import styles from "../../views/Movie/styles"
import UpcomingHeader from "../UpcomingHeader"
import ButtonRowUpcoming from "../ButtonRowUpcoming"
import {
    showPlot,
    showGenres,
    showRelease,
    hideAll,
} from "../../redux/features/visibilitySlice"

const UpcomingDetail = ({id}) => {
    const navigation = useNavigation()
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies)
    const dispatch = useDispatch()
    const upcoming = upcomingMovies.find((movie) => movie._id === id)
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )

    const handleNavigate = () => {
        return () => {
            dispatch(hideAll())
            navigation.goBack()
        }
    }

    const handleToggle = (section) => {
        if (visibleSection === section) {
            dispatch(hideAll())
        } else {
            switch (section) {
            case "plot":
                dispatch(showPlot())
                break
            case "genres":
                dispatch(showGenres())
                break
            case "release":
                dispatch(showRelease())
                break
            default:
                break
            }
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
                <ButtonRowUpcoming
                    handleToggle={handleToggle}
                    visibleSection={visibleSection}
                    movie={upcoming}
                />
            </ScrollView>
        </View>
    )
}

export default UpcomingDetail
