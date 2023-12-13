import React, {useEffect} from "react"
import {View, Text, Pressable, Image, ScrollView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {toggleDescription} from "../../redux/features/visibilitySlice"
import {useNavigation} from "@react-navigation/native"
import styles from "./styles"

const CinemaMovies = ({id}) => {
    const movies = useSelector((state) => state.movies.movies)
    const dispatch = useDispatch()
    const navigate = useNavigation().navigate
    const filteredMovies = movies.filter((movie) =>
        movie.showtimes.some((showtime) => showtime.cinema.id === id),
    )

    if (filteredMovies.length === 0) {
        dispatch(toggleDescription())
    }

    const handlePress = (movieID) => {
        navigate("Movie Screen", {movieID, cinemaID: id})
    }
    return (
        <ScrollView
            style={styles.scroller}
            contentContainerStyle={{paddingBottom: 200}}
        >
            {filteredMovies.map((movie) => (
                <View key={movie.id}>
                    <Pressable
                        style={styles.card}
                        onPress={() => handlePress(movie.id)}
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
                                    {movie.genres.map((genre, index) => (
                                        <Text style={styles.genre} key={index}>
                                            {genre["NameEN\t"]}
                                        </Text>
                                    ))}
                                </View>
                                <Text style={styles.year}>{movie.year}</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    )
}

export default CinemaMovies
