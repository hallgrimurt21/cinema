import React from "react"
import {View} from "react-native"
import {useSelector} from "react-redux"

import DropDown from "../DropDown"
import styles from "../CinemaMovies/styles"

const GenresDropDown = () => { // renders the genres drop down menu
    const genres = useSelector((state) => state.genres.genres) // get the genres from the redux store
    const movies = useSelector((state) => state.movies.movies) // get the movies from the redux store
    const filteredGenres = genres.filter((genre) =>
        movies.some((movie) =>
            movie.genres.some((movieGenre) => movieGenre.ID === genre.ID),
        ),
    ) // filters the genres
    const genreNames = filteredGenres.map((genre) => genre["NameEN\t"]) // gets the genre names
    return (
        <View style={styles.dropDown}>
            {Array.isArray(genreNames) && (
                <DropDown selectedOptions={genreNames} />
            )}
        </View>
    )
}

export default GenresDropDown
