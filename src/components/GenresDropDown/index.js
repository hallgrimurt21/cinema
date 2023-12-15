import React from "react"
import {View} from "react-native"
import {useSelector} from "react-redux"
import DropDown from "../DropDown"

const GenresDropDown = () => {
    const genres = useSelector((state) => state.genres.genres)
    const movies = useSelector((state) => state.movies.movies)
    const filteredGenres = genres.filter((genre) =>
        movies.some((movie) =>
            movie.genres.some((movieGenre) => movieGenre.ID === genre.ID),
        ),
    )
    const genreNames = filteredGenres.map((genre) => genre["NameEN\t"])
    return (
        <View>
            {Array.isArray(genreNames) && (
                <DropDown
                    selectedOptions={genreNames}
                    defaultValue="Filter by genres"
                />
            )}
        </View>
    )
}

export default GenresDropDown
