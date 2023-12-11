/* eslint-disable max-len */
import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {fetchMoviesByTitle, fetchMoviesBySearch} from "./movie-slice"

const MoviesDisplay = () => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movie.movies)

    useEffect(() => {
        dispatch(fetchMoviesByTitle("title")) // replace 'title' with the actual title
    // or
    // dispatch(fetchMoviesBySearch('search')); // replace 'search' with the actual search term
    }, [dispatch])

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    {/* Add more movie details if needed */}
                </div>
            ))}
        </div>
    )
}

export default MoviesDisplay
