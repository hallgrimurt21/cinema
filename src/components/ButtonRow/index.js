import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles" // import your styles

const ButtonRow = ({
    handleToggle,
    visibleSection,
    movie,
    showtimes,
    handlePress,
}) => (
    <View>
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
    </View>
)

export default ButtonRow
