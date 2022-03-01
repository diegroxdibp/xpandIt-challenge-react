import { Pill } from '../../components/pill/pill'
import { MovieGridHeader } from '../../components/movie-grid'
import { MoviePageBody, PillsWrapper } from './styles'
import { DividerHeader } from '../../components/divider'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { MovieRankingList } from '../../components/movie-list/movie-list'
import { PillsOptions } from '../../models/pills-options'
import { useDispatch, useSelector } from 'react-redux'
import { movieRanking } from '../../redux/actions/select-movie-ranking'
import { selectYear } from '../../redux/actions/select-year'
import YearSelect from '../../components/year-select/year-select'
import { yearSelection } from '../../redux/actions/year-selection'
import { RootState } from '../../redux/reducers'

export const MovieRanking = () => {
  const dispatch = useDispatch()
  const MOVIE_RANKING = useSelector((state: RootState) => state.movieRanking)
  const YEAR_SELECTION = useSelector((state: RootState) => state.yearSelection)
  const YEAR = useSelector((state: RootState) => state.year)
  return (
    <MoviePageBody>
      <h1>Movie ranking</h1>
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

      {YEAR_SELECTION.state ? <YearSelect /> : null}

      <MovieGridHeader>
        <span>RANKING</span>
        <span className="title">TITLE</span>
        <span>YEAR</span>
        <span>REVENUE</span>
        <span></span>
      </MovieGridHeader>
      <DividerHeader />

      <MovieRankingList />
    </MoviePageBody>
  )
}
