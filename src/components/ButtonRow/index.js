import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles" // import your styles

const ButtonRow = ({
    handleToggle, // function for toggling between info sections
    visibleSection, // string for determining which info section is visible
    movie, // object containing movie info
    showtimes, // array containing showtimes
    handlePress, // function for handling press on showtime
}) => (
    //=========================Buttons for switching info=========================//
    <View>
        <View style={styles.buttonRow}>
            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    visibleSection === "plot"
                        ? styles.activeButton
                        : styles.botButton,
                ]}
                onPress={() => handleToggle("plot")} //toggles plot
            >
                <Text
                    style={
                        visibleSection === "plot" // change style on toggle
                            ? styles.activeButtonText
                            : styles.botButText
                    }
                >
                    Plot
                </Text>
            </Pressable>
            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    visibleSection === "genres"
                        ? styles.activeButton // change style on toggle
                        : styles.botButton,
                ]}
                onPress={() => handleToggle("genres")} //toggles genres
            >
                <Text
                    style={
                        visibleSection === "genres"
                            ? styles.activeButtonText // change style on toggle
                            : styles.botButText
                    }
                >
                    Genres
                </Text>
            </Pressable>
            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    visibleSection === "showtimes"
                        ? styles.activeButton // change style on toggle
                        : styles.botButton,
                ]}
                onPress={() => handleToggle("showtimes")} //toggles showtimes
            >
                <Text
                    style={
                        visibleSection === "showtimes"
                            ? styles.activeButtonText // change style on toggle
                            : styles.botButText
                    }
                >
                    Showtimes
                </Text>
            </Pressable>
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
                            pressed ? styles.pressedShowtime : styles.showtime,
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

export default ButtonRow
