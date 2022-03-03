import { useCallback, useRef, useState } from 'react'
import { Divider } from '../divider'
import { MovieInfo } from '../movie-grid'
import { Movie } from '../../models/movie'
import { getMovies } from '../../services/movies.service'
import { MoviesWrapper } from '../../pages/movies/styles'
import MovieDetail from '../movie-detail/movie-details'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const DefaultRanking = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [modalState, useModalState] = useState<string>('')
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
      {movies.map((movie: Movie, index: number) => {
        if (index + 1 === movies.length) {
          return (
            <div key={movie.id} className="wrapper">
              <MovieInfo ref={lastMovie} key={movie.id}>
                <span>{movie.rank}</span>
                <span className="title">{movie.title}</span>
                <span>{movie.year}</span>
                <span>${movie.revenue}</span>
                <span
                  className="dialog-button"
                  onClick={() => {
                    useModalState(movie.id)
                  }}
                >
                  <FontAwesomeIcon icon={faEye} />
                </span>
              </MovieInfo>

              {modalState === movie.id
                ? (
                <MovieDetail
                  movie={movie}
                  show={modalState}
                  handleClose={() => useModalState('')}
                ></MovieDetail>
                  )
                : null}
            </div>
          )
        } else {
          return (
            <div key={movie.id} className="wrapper">
              <MovieInfo>
                <span>{movie.rank}</span>
                <span className="title">{movie.title}</span>
                <span>{movie.year}</span>
                <span>${movie.revenue}</span>
                <span
                  className="dialog-button"
                  onClick={() => {
                    useModalState(movie.id)
                  }}
                >
                  <FontAwesomeIcon icon={faEye} />
                </span>
              </MovieInfo>
              <Divider />
              {modalState === movie.id
                ? (
                <MovieDetail
                  movie={movie}
                  show={modalState}
                  handleClose={() => useModalState('')}
                ></MovieDetail>
                  )
                : null}
            </div>
          )
        }
      })}
    </MoviesWrapper>
  )
}
