import React from "react"
import {Image, Text, TouchableOpacity, View} from "react-native"
import {ScrollView} from "react-native-gesture-handler"
import {useNavigation} from "@react-navigation/native"
import {useSelector} from "react-redux"

import filterMovies from "../../utils/filterMovies"
import {deviceHeight} from "../../styles/sizes"
import styles from "../CinemaMovies/styles"

const UpcomingMovies = () => {
    const movies = useSelector((state) => state.upcomingMovies.movies)
    const searchWord = useSelector((state) => state.search.value)
    const genreFilter = useSelector((state) => state.dropDown.selectedOptions)

    const filteredMovies = filterMovies({
        id: null,
        movies,
        searchWord,
        genreFilter,
    })
    const navigate = useNavigation().navigate

    return (
        <View style={styles.someBackground}>
            <ScrollView
                style={styles.scroller}
                contentContainerStyle={{
                    paddingBottom: 200,
                    paddingTop: deviceHeight * 0.12,
                }}
            >
                <View>
                    {filteredMovies.map((movie, index) => (
                        <TouchableOpacity
                            style={styles.card}
                            key={index}
                            onPress={() =>
                                navigate("Upcoming Movie Screen", {
                                    id: movie._id,
                                })
                            }
                        >
                            <Image
                                source={{uri: movie.poster}}
                                style={styles.poster}
                            />
                            <View style={styles.info}>
                                <View style={styles.titleView}>
                                    <Text
                                        numberOfLines={2}
                                        ellipsizeMode="clip"
                                        style={styles.title}
                                    >
                                        {movie.title}
                                    </Text>
                                </View>
                                <View style={styles.bottomPart}>
                                    <View style={styles.genres}>
                                        <Text style={styles.genre}>
                                            Release Date:{" "}
                                            {movie["release-dateIS"]}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default UpcomingMovies
