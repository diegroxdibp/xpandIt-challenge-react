import { Divider } from '../divider'
import { MovieInfo } from '../movie-grid'
import { Movie } from '../../models/movie'
import { getMoviesTop10Revenue } from '../../services/movies.service'
import { MoviesWrapper } from '../../pages/movies/styles'
import { useState } from 'react'
import MovieDetail from '../movie-detail/movie-details'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const Top10 = () => {
  const { movies } = getMoviesTop10Revenue()
  const [modalState, useModalState] = useState<string>('')

  return (
    <MoviesWrapper>
      {movies.map((movie: Movie, index: number) => {
        return (
          <div key={movie.id} className="wrapper">
            <MovieInfo key={movie.id}>
              <span>{index + 1}</span>
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
      })}
    </MoviesWrapper>
  )
}
