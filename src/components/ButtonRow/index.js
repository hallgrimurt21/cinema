import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles" // import your styles
import InfoButton from "../InfoButton"
import {useSelector, useDispatch} from "react-redux"
import {Linking, UIManager} from "react-native"

const ButtonRow = ({
    movie, // object containing movie info
    showtimes, // array containing showtimes
}) => {
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true) // set animation layout for android
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    ) // get the visibleSection from the redux store

    const handlePress = (url) => {
        Linking.openURL(url)
    } // open the url to showtime in the browser

    return (
        //=========================Buttons for switching info=========================//
        <View>
            <View style={styles.buttonRow}>
                <InfoButton visibleSection={visibleSection} section="plot" />
                <InfoButton visibleSection={visibleSection} section="genres" />
                <InfoButton
                    visibleSection={visibleSection}
                    section="showtimes"
                />
            </View>
            {/* ===================== Info section ====================== */}
            {visibleSection === "plot" && ( // if visibleSection is plot, show plot
                <View style={styles.plotBox}>
                    <Text style={styles.plot}>{movie.plot}</Text>
                </View>
            )}
            {visibleSection === "genres" && ( // if visibleSection is genres, show genres
                <View style={styles.genres}>
                    {movie.genres.map((genre, index) => (
                        <Text style={styles.genre} key={index}>
                            {genre["NameEN\t"]}
                        </Text>
                    ))}
                </View>
            )}
            {visibleSection === "showtimes" && ( // if visibleSection is showtimes, show showtimes
                <View style={styles.allShows}>
                    {showtimes.map((showtime, index) => (
                        // ===================== Showtime buttons mapper ====================== //
                        <Pressable
                            style={({pressed}) => [
                                pressed
                                    ? styles.pressedShowtime
                                    : styles.showtime,
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
        </View>
    )
}

export default ButtonRow
