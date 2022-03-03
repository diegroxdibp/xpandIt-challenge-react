import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { PillsOptions } from '../../models/pills-options'
import { movieRanking } from '../../redux/actions/select-movie-ranking'
import { selectYear } from '../../redux/actions/select-year'
import { yearSelection } from '../../redux/actions/year-selection'
import { RootState } from '../../redux/reducers'
import { Pill } from '../pill/pill'
import { PillsWrapper } from './styles'

export const MenuRanking: FC = () => {
  const dispatch = useDispatch()
  const MOVIE_RANKING = useSelector((state: RootState) => state.movieRanking)
  const YEAR = useSelector((state: RootState) => state.year)
  return (
    <PillsWrapper>
      <div
        onClick={() => {
          dispatch(selectYear(null))
          dispatch(movieRanking(MovieRankingState.top10rev))
        }}
      >
        <Pill title={PillsOptions.top10rev}></Pill>
      </div>

      <div
        onClick={() => {
          dispatch(yearSelection(true))
          if (
            MOVIE_RANKING.state !== MovieRankingState.top10revYear &&
            !YEAR.state
          ) {
            dispatch(selectYear(null))
          }
        }}
      >
        <Pill title={PillsOptions.top10revYear}></Pill>
      </div>
    </PillsWrapper>
  )
}
