import React from "react"
import {View, Text} from "react-native"
import styles from "./styles" // import your styles
import {useSelector, useDispatch} from "react-redux"
import {UIManager} from "react-native"
import InfoButton from "../InfoButton"

const ButtonRow = ({movie}) => {
    UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true) // set animation layout for android
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )
    return (
        //=========================Buttons for switching info=========================//
        <View>
            <View style={styles.buttonRow}>
                <InfoButton section="plot" />
                <InfoButton section="genres" />
                <InfoButton section="release" />
            </View>
            {/* ============================= visible section ========================= */}
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
            {visibleSection === "release" && ( // if visibleSection is release, show release
                <View style={styles.releaseBox}>
                    <Text style={styles.releaseText}>
                        Release date: {movie["release-dateIS"]}
                    </Text>
                </View>
            )}
        </View>
    )
}

export default ButtonRow
