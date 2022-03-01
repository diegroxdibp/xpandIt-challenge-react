import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { selectYear } from '../../redux/actions/select-year'
import { RootState } from '../../redux/reducers'
import { getMoviesYears } from '../../services/movies.service'
import { YearSelectBackdrop, YearSelectWindow } from './styles'

const YearSelect: FC = () => {
  const moviesYears = getMoviesYears()
  const MOVIE_RANKING = useSelector((state: RootState) => state.movieRanking)
  const YEAR = useSelector((state: RootState) => state.year)
  const dispatch = useDispatch()

  const showHide =
    MOVIE_RANKING.state === MovieRankingState.top10revYear && !YEAR.state
      ? { display: 'flex' }
      : { display: 'none' }

  return (
    <YearSelectBackdrop style={showHide}>
      <YearSelectWindow>
        <h1>Select a year</h1>
        {moviesYears.map((movieYear: number) => (
          <span key={movieYear} onClick={() => dispatch(selectYear(movieYear))}>
            {movieYear}
          </span>
        ))}
      </YearSelectWindow>
    </YearSelectBackdrop>
  )
}

export default YearSelect
