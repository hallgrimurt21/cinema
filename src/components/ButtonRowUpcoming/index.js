import React from "react"
import {View, Pressable, Text} from "react-native"
import styles from "./styles" // import your styles

const ButtonRow = ({
    handleToggle,
    visibleSection,
    upcoming,
    release,

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
                onPress={() => handleToggle("release")}
            >
                <Text style={styles.botButText}>Release</Text>
            </Pressable>
        </View>
        {visibleSection === "plot" && (
            <Text style={styles.plot}>{upcoming.plot}</Text>
        )}
        {visibleSection === "genres" && (
            <View style={styles.genres}>
                {upcoming.genres.map((genre, index) => (
                    <Text style={styles.genre} key={index}>
                        {genre["NameEN\t"]}
                    </Text>
                ))}
            </View>
        )}
        {visibleSection === "release" && (
            <View style={styles.genres}>
                <Text style={styles.plot}>
                Release date: {upcoming["release-dateIS"]}
                </Text>
            </View>

        )}
    </View>
)

export default ButtonRow
