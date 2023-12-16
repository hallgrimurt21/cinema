import React from "react"
import {Linking, ScrollView, LayoutAnimation, UIManager} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import {
    showPlot,
    showGenres,
    showShowtimes,
    hideAll,
} from "../../redux/features/visibilitySlice"
import ButtonRow from "../../components/ButtonRow"
import MovieHeader from "../../components/MovieHeader"
import styles from "./styles"
/**
 * Displays the movie details
 * @param {Object} param0 - The props object
 * @param {Object} param0.route - The route object
 * @return {JSX.Element} The movie details component
 */
function Movie({route}) {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true) // set animation layout for android

    const {cinemaID, movieID} = route.params // get the cinemaID and movieID from the route params
    const movies = useSelector((state) => state.movies.movies) // get the movies from the redux store
    const movie = movies.find((movie) => movie.id === movieID) // find the movie with the movieID

    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    ) // get the visibleSection from the redux store

    const showtimes = movie.showtimes // get the showtimes from the movie and list them nicely
        .filter((showtime) => showtime.cinema.id === cinemaID)
        .map((showtime) => showtime.schedule)
        .flat()

    const handlePress = (url) => {
        Linking.openURL(url)
    } // open the url to showtime in the browser

    handleNavigate = () => {
        return () => {
            dispatch(hideAll())
            navigation.goBack()
        }
    } // handle the navigation back to the previous screen

    const customAnimation = {
        // set the animation for changing visibleSection
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
        // handle the toggling of the visibleSection
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
