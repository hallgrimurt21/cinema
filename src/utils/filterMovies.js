const filterMovies = ({
    id,
    movies,
    searchFilter,
    genreFilter,
    similarFilter,
}) => {
    let filteredMovies = movies

    if (id) {
        filteredMovies = movies.filter((movie) =>
            movie.showtimes.some((showtime) => showtime.cinema.id === id),
        )
    }

    if (searchFilter) {
        filteredMovies = filteredMovies.filter((movie) =>
            movie.title.toLowerCase().includes(searchFilter.toLowerCase()),
        )
    }

    if (genreFilter.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
            genreFilter.every((genre) =>
                movie.genres.some((g) => g["NameEN\t"] === genre),
            ),
        )
    }
    if (similarFilter.genres.length > 0) {
        filteredMovies = filteredMovies.filter(
            (movie) =>
                similarFilter.genres.some((genre) =>
                    movie.genres.some((g) => g["NameEN\t"] === genre),
                ) && movie.id !== similarFilter.id,
        )
    }
    return filteredMovies
}

export default filterMovies
