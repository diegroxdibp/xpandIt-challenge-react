import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { PillsOptions } from '../../models/pills-options'
import { movieRanking } from '../../redux/actions/select-movie-ranking'
import { selectYear } from '../../redux/actions/select-year'
import { yearSelection } from '../../redux/actions/year-selection'
import { RootState } from '../../redux/reducers'
import { PillBody } from './styles'

interface Props {
  title: string;
}

export const Pill: FC<Props> = (props) => {
  const dispatch = useDispatch()
  const MOVIE_RANKING = useSelector((state: RootState) => state.movieRanking)
  const YEAR = useSelector((state: RootState) => state.year)

  function menuAction (menuOption: PillsOptions) {
    switch (menuOption) {
      case PillsOptions.top10rev:
        dispatch(selectYear(null))
        if (MOVIE_RANKING.state !== MovieRankingState.top10rev) {
          dispatch(movieRanking(MovieRankingState.top10rev))
        }
        if (MOVIE_RANKING.state === MovieRankingState.top10rev) {
          dispatch(movieRanking(MovieRankingState.default))
        }
        break

      case PillsOptions.top10revYear:
        dispatch(yearSelection(true))
        if (
          MOVIE_RANKING.state !== MovieRankingState.top10revYear &&
          !YEAR.state
        ) {
          dispatch(selectYear(null))
        }
        break
    }
  }

  return (
    <PillBody onClick={() => menuAction(props.title as PillsOptions)}>
      {props.title}
    </PillBody>
  )
}
