import { Divider } from '../divider'
import { EyeIcon } from '../eye'
import { MovieInfo } from '../movie-grid'
import { Movie } from '../../models/movie'
import { MoviesWrapper } from '../../pages/movies/styles'
import { FC, useState } from 'react'
import MovieDetail from '../movie-detail/movie-details'
import { getMoviesByYear } from '../../services/movies.service'

interface Props {
  year: number;
}

export const Top10ByYear: FC<Props> = (props) => {
  const { movies } = getMoviesByYear(props.year)
  const [modalState, useModalState] = useState<string>('')
  console.log('props year', props.year)
  return (
    <MoviesWrapper>
      {movies.map((movie: Movie, index: number) => {
        console.log(movie)
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
                <EyeIcon />
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
