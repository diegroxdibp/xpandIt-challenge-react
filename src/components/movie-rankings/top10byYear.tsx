import { Divider } from '../divider'
import { MovieInfo } from '../movie-grid'
import { Movie } from '../../models/movie'
import { MoviesWrapper } from '../../pages/movies/styles'
import { FC, useState } from 'react'
import MovieDetail from '../movie-detail/movie-details'
import { getMoviesByYear } from '../../services/movies.service'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const Top10ByYear: FC = () => {
  const YEAR = useSelector((state: RootState) => state.year)
  const { movies } = getMoviesByYear(YEAR.state)
  const [modalState, useModalState] = useState<string>('')
  console.log('YEAR->', YEAR.state)
  return (
    <MoviesWrapper>
      {movies.map((movie: Movie, index: number) => {
        return (
          <>
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
          </>
        )
      })}
    </MoviesWrapper>
  )
}
