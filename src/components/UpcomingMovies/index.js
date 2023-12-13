/* eslint-disable max-len */
import React from "react"
import {useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Image} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {ScrollView} from "react-native-gesture-handler"
import styles from "../CinemaMovies/styles"

const UpcomingMovies = () => {
    const navigate = useNavigation().navigate
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies)

    return (
        <View style={styles.someBackground}>
            <ScrollView
                style={styles.scroller}
                contentContainerStyle={{paddingBottom: 200, paddingTop: 100}}
            >
                <View>
                    {upcomingMovies.map((movie, index) => (
                        <TouchableOpacity
                            style={styles.card}
                            key={index}
                            onPress={() => navigate("Upcoming Movie Screen", {id: movie._id})}
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
                                        <Text style={styles.genre}>Release Date: {movie["release-dateIS"]}</Text>
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
