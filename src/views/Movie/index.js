import React from "react"
import {
    View,
    Text,
    Linking,
    Pressable,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    Modal,
    TouchableWithoutFeedback,

} from "react-native"
import styles from "./styles"
import {useSelector, useDispatch, connect} from "react-redux"
import {
    showPlot,
    showGenres,
    showShowtimes,
    hideAll,
} from "../../redux/features/visibilitySlice"
import {useNavigation} from "@react-navigation/native"
import YoutubePlayer from "react-native-youtube-iframe"
import {openModal, closeModal} from "../../constants/constants"


const mapStateToProps = (state) => ({
    modalVisible: state.modalReducer.modalVisible,
})

const mapDispatchToProps = {
    openModal,
    closeModal,
}

// eslint-disable-next-line require-jsdoc
function MovieDetailsScreen({route, openModal, closeModal, modalVisible}) {
    const {cinemaID, movieID} = route.params
    const movies = useSelector((state) => state.movies.movies)
    const movie = movies.find((movie) => movie.id === movieID)
    const dispatch = useDispatch()
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )
    const navigation = useNavigation()


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
            case "showtimes":
                dispatch(showShowtimes())
                break
            default:
                break
            }
        }
    }

    const showtimes = movie.showtimes
        .filter((showtime) => showtime.cinema.id === cinemaID)
        .map((showtime) => showtime.schedule)
        .flat()

    const handlePress = (url) => {
        Linking.openURL(url)
    }

    handleNavigate = () => {
        return () => navigation.goBack()
    }


    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.poster} source={{uri: movie.poster}}>
                <View style={styles.header}>
                    <SafeAreaView style={styles.safe}>
                        <Pressable onPress={handleNavigate()}>
                            <Text style={styles.back}>Back</Text>
                        </Pressable>
                        <View style={styles.rightInfo}>
                            <Text style={styles.title}>{movie.title}</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>

            <View style={styles.buttonRow}>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.botButton,
                    ]}
                    onPress={() => handleToggle("plot")}
                >
                    <Text style={styles.botButText}>Plot</Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.botButton,
                    ]}
                    onPress={() => handleToggle("genres")}
                >
                    <Text style={styles.botButText}>Genres</Text>
                </Pressable>
                <Pressable
                    style={({pressed}) => [
                        {opacity: pressed ? 0.5 : 1},
                        styles.botButton,
                    ]}
                    onPress={() => handleToggle("showtimes")}
                >
                    <Text style={styles.botButText}>Showtimes</Text>
                </Pressable>
            </View>
            {visibleSection === "plot" && (
                <Text style={styles.plot}>{movie.plot}</Text>
            )}
            {visibleSection === "genres" && (
                <View style={styles.genres}>
                    {movie.genres.map((genre, index) => (
                        <Text style={styles.genre} key={index}>
                            {genre["NameEN\t"]}
                        </Text>
                    ))}
                </View>
            )}
            {visibleSection === "showtimes" && (
                <View style={styles.allShows}>
                    {showtimes.map((showtime, index) => (
                        <Pressable
                            style={({pressed}) => [
                                {opacity: pressed ? 0.5 : 1},
                                styles.showtime,
                            ]}
                            key={index}
                            onPress={() => handlePress(showtime.purchase_url)}
                        >
                            <Text style={styles.time}>{showtime.time}</Text>
                            <Text style={styles.buy}>Buy ticket</Text>
                        </Pressable>
                    ))}
                </View>

            )}

            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    styles.trailerButton,
                ]}
                onPress={() => openModal()}
            >
                <Text style={styles.botButText}>Play Trailer</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback onPress={(event) => event.stopPropagation()}>

                            <View style={styles.modal}>
                                <YoutubePlayer
                                    height={300}
                                    play={false}
                                    videoId={movie.trailers[0].results[0].key}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </ScrollView>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsScreen)
