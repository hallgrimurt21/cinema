import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles" // import your styles

const ButtonRow = ({handleToggle, visibleSection, movie}) => (
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
                onPress={() => handleToggle("plot")} //toggle plot
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
                    visibleSection === "genres" // change style on toggle
                        ? styles.activeButton
                        : styles.botButton,
                ]}
                onPress={() => handleToggle("genres")} //toggle genres
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
                    visibleSection === "release"
                        ? styles.activeButton // change style on toggle
                        : styles.botButton,
                ]}
                onPress={() => handleToggle("release")} //toggle release
            >
                <Text
                    style={
                        visibleSection === "release"
                            ? styles.activeButtonText // change style on toggle
                            : styles.botButText
                    }
                >
                    Release
                </Text>
            </Pressable>
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

export default ButtonRow
