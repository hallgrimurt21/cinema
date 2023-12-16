import React from "react"
import {Linking, ScrollView, LayoutAnimation, UIManager} from "react-native"
import styles from "./styles"
import {useSelector, useDispatch} from "react-redux"
import {
    showPlot,
    showGenres,
    showShowtimes,
    hideAll,
} from "../../redux/features/visibilitySlice"
import {useNavigation} from "@react-navigation/native"
import ButtonRow from "../../components/ButtonRow"
import MovieHeader from "../../components/MovieHeader"

/**
 * Displays the movie details
 * @param {Object} param0 - The props object
 * @param {Object} param0.route - The route object
 * @return {JSX.Element} The movie details component
 */
function Movie({route}) {
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true)
    const {cinemaID, movieID} = route.params
    const movies = useSelector((state) => state.movies.movies)
    const movie = movies.find((movie) => movie.id === movieID)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )

    const showtimes = movie.showtimes
        .filter((showtime) => showtime.cinema.id === cinemaID)
        .map((showtime) => showtime.schedule)
        .flat()

    const handlePress = (url) => {
        Linking.openURL(url)
    }

    handleNavigate = () => {
        return () => {
            dispatch(hideAll())
            navigation.goBack()
        }
    }

    const customAnimation = {
        duration: 750, // Duration in milliseconds.
        create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.opacity,
            springDamping: 0.4,
            duration: 700,
        },
        update: {
            type: LayoutAnimation.Types.spring,
            springDamping: 0.4,
        },
        delete: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
            duration: 100,
        },
    }

    const handleToggle = (section) => {
        LayoutAnimation.configureNext(customAnimation)

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
            case "showtimes":
                dispatch(showShowtimes())
                break
            default:
                break
            }
        }
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{paddingBottom: 100}}
        >
            <MovieHeader movie={movie} handleNavigate={handleNavigate()} />

            <ButtonRow
                handleToggle={handleToggle}
                visibleSection={visibleSection}
                movie={movie}
                showtimes={showtimes}
                handlePress={handlePress}
            />
        </ScrollView>
    )
}

export default Movie
