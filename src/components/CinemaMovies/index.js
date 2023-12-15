import React from "react"
import {View, Text, Image, ScrollView, TouchableOpacity} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {useSelector, useDispatch} from "react-redux"
import filterMovies from "../../utils/filterMovies"
import styles from "./styles"
import {deviceHeight} from "../../styles/sizes"
import {toggleDescription} from "../../redux/features/visibilitySlice"

const CinemaMovies = ({id}) => {
    const movies = useSelector((state) => state.movies.movies)
    const searchWord = useSelector((state) => state.search.value)
    const genreFilter = useSelector((state) => state.dropDown.selectedOptions)
    const dispatch = useDispatch()

    const filteredMovies = filterMovies({
        id: id ? id : null,
        movies,
        searchWord,
        genreFilter,
    })

    if (filteredMovies.length === 0) {
        dispatch(toggleDescription())
    }
    const navigate = useNavigation().navigate

    const handlePress = (movieID) => {
        navigate("Movie Screen", {movieID, cinemaID: id})
    }
    return (
        <ScrollView
            style={styles.scroller}
            contentContainerStyle={{
                paddingBottom: 200,
                paddingTop: deviceHeight * 0.12,
            }}
        >
            {filteredMovies.map((movie) => (
                <View key={movie.id}>
                    <TouchableOpacity
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
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    )
}

export default CinemaMovies
