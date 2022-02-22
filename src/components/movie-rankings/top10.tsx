import { Divider } from '../divider'
import { EyeIcon } from '../eye'
import { MovieInfo } from '../movie-grid'
import { Movie } from '../../models/movie'
import { getMoviesTop10Revenue } from '../../services/movies.service'
import { MoviesWrapper } from '../../pages/movies/styles'
import Modal from '../movie-detail/movie-details'
import { useState } from 'react'

export const Top10 = () => {
  const { movies } = getMoviesTop10Revenue()
  const [modalState, useModalState] = useState<boolean>()

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
                onClick={(e) => {
                  console.log(e)
                  e.preventDefault()
                  e.stopPropagation()
                  e.nativeEvent.stopImmediatePropagation()
                  useModalState(true)
                }}
              >
                <EyeIcon />
              </span>
            </MovieInfo>
            <Divider />

            <Modal
              movie={movie}
              show={modalState}
              handleClose={() => useModalState(false)}
            ></Modal>
          </>
        )
      })}
    </MoviesWrapper>
  )
}
