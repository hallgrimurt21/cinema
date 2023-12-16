const filterMovies = ({id, movies, searchWord, genreFilter}) => {
    let filteredMovies = movies
    // filter movies by cinema id

    if (id) {
        filteredMovies = movies.filter((movie) =>
            movie.showtimes.some((showtime) => showtime.cinema.id === id),
        )
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
