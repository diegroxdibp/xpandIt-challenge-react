import { Divider } from '../../components/divider'
import { EyeIcon } from '../../components/eye'
import { MovieInfo } from '../../components/movie-grid'
import { Movie } from '../../models/movie'
import { getMoviesTop10Revenue } from '../../services/movies.service'
import { MoviesWrapper } from '../movies/styles'

export const Top10 = () => {
  const { movies } = getMoviesTop10Revenue()

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
              <span className="dialog-button">
                <EyeIcon />
              </span>
            </MovieInfo>
            <Divider />
          </>
        )
      })}
    </MoviesWrapper>
  )
}
