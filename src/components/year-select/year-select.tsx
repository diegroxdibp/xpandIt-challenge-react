import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { movieRanking } from '../../redux/actions/select-movie-ranking'
import { selectYear } from '../../redux/actions/select-year'
import { yearSelection } from '../../redux/actions/year-selection'
import { getMoviesYears } from '../../services/movies.service'
import { YearSelectBackdrop, YearSelectWindow } from './styles'

const YearSelect: FC = () => {
  const moviesYears = getMoviesYears()
  const dispatch = useDispatch()

  return (
    <YearSelectBackdrop>
      <YearSelectWindow>
        <h1>Select a year</h1>
        {moviesYears.map((movieYear: number) => (
          <span
            key={movieYear}
            onClick={() => {
              dispatch(selectYear(movieYear))
              dispatch(yearSelection(false))
              dispatch(movieRanking(MovieRankingState.top10revYear))
            }}
          >
            {movieYear}
          </span>
        ))}
      </YearSelectWindow>
    </YearSelectBackdrop>
  )
}

export default YearSelect
