import {useSelector, useDispatch} from "react-redux"
import {toggleDescription} from "../redux/features/visibilitySlice"
const filterMovies = ({id}) => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies.movies)
    const searchWord = useSelector((state) => state.search.value)
    const genreFilter = useSelector((state) => state.dropDown.selectedOptions)
    console.log("genres", genreFilter)

    let filteredMovies = movies

    if (id) {
        filteredMovies = movies.filter((movie) =>
            movie.showtimes.some((showtime) => showtime.cinema.id === id),
        )

        if (filteredMovies.length === 0) {
            dispatch(toggleDescription())
        }
    } else {
        filteredMovies = movies
    }
    if (searchWord) {
        filteredMovies = filteredMovies.filter((movie) =>
            movie.title.toLowerCase().includes(searchWord.toLowerCase()),
        )
    }
    if (genreFilter.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
            genreFilter.every((genre) =>
                movie.genres.some((g) => g["NameEN\t"] === genre),
            ),
        )
    }

    return filteredMovies
}

export default filterMovies
