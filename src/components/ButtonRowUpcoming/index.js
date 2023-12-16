import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles"

const ButtonRow = ({handleToggle, visibleSection, movie}) => (
    <View>
        <View style={styles.buttonRow}>
            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    visibleSection === "plot" ?
                        styles.activeButton :
                        styles.botButton,
                ]}
                onPress={() => handleToggle("plot")}
            >
                <Text
                    style={
                        visibleSection === "plot" ?
                            styles.activeButtonText :
                            styles.botButText
                    }
                >
                    Plot
                </Text>
            </Pressable>
            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    visibleSection === "genres" ?
                        styles.activeButton :
                        styles.botButton,
                ]}
                onPress={() => handleToggle("genres")}
            >
                <Text
                    style={
                        visibleSection === "genres" ?
                            styles.activeButtonText :
                            styles.botButText
                    }
                >
                    Genres
                </Text>
            </Pressable>
            <Pressable
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    visibleSection === "release" ?
                        styles.activeButton :
                        styles.botButton,
                ]}
                onPress={() => handleToggle("release")}
            >
                <Text
                    style={
                        visibleSection === "release" ?
                            styles.activeButtonText :
                            styles.botButText
                    }
                >
                    Release
                </Text>
            </Pressable>
        </View>
        {visibleSection === "plot" && (
            <View style={styles.plotBox}>
                <Text style={styles.plot}>{movie.plot}</Text>
            </View>
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
        {visibleSection === "release" && (
            <View style={styles.releaseBox}>
                <Text style={styles.releaseText}>
                    Release date: {movie["release-dateIS"]}
                </Text>
            </View>
        )}
    </View>
)

export default ButtonRow
