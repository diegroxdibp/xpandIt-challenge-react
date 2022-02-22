import { useCallback, useRef, useState } from 'react'
import { Divider } from '../divider'
import { EyeIcon } from '../eye'
import { MovieInfo } from '../movie-grid'
import { Movie } from '../../models/movie'
import { getMovies } from '../../services/movies.service'
import { MoviesWrapper } from '../../pages/movies/styles'

export const DefaultRanking = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const { loading, movies, hasMore } = getMovies(pageNumber)

  const observer = useRef<IntersectionObserver | null>(null)
  const lastMovie = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
          console.log(pageNumber)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )
  return (
    <MoviesWrapper>
      {console.log('AQUI', movies)}
      {movies.map((movie: Movie, index: number) => {
        if (index + 1 === movies.length) {
          return (
            <>
              <MovieInfo ref={lastMovie} key={movie.id}>
                <span>{movie.rank}</span>
                <span className="title">{movie.title}</span>
                <span>{movie.year}</span>
                <span>${movie.revenue}</span>
                <span className="dialog-button">
                  <img src="../../assets/eye.svg" alt="Eye icon" />
                </span>
              </MovieInfo>
            </>
          )
        } else {
          return (
            <>
              <MovieInfo key={movie.id}>
                <span>{movie.rank}</span>
                <span className="title">{movie.title}</span>
                <span>{movie.year}</span>
                <span>${movie.revenue}</span>
                <span className="dialog-button">
                  <EyeIcon />
                </span>
              </MovieInfo>
              <Divider />
            </>
          )
        }
      })}
    </MoviesWrapper>
  )
}
