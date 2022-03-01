import { Pill } from '../../components/pill/pill'
import { MovieGridHeader } from '../../components/movie-grid'
import { MoviePageBody, PillsWrapper } from './styles'
import { DividerHeader } from '../../components/divider'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { MovieRankingList } from '../../components/movie-list/movie-list'
import { PillsOptions } from '../../models/pills-options'
import { useDispatch } from 'react-redux'
import { movieRanking } from '../../redux/actions/select-movie-ranking'
import { selectYear } from '../../redux/actions/select-year'
import YearSelect from '../../components/year-select/year-select'

export const MovieRanking = () => {
  const dispatch = useDispatch()
  return (
    <MoviePageBody>
      <h1>Movie ranking</h1>
      {/* // TODO REFACTOR */}
      <PillsWrapper>
        <div
          onClick={() => {
            dispatch(movieRanking(MovieRankingState.top10rev))
            dispatch(selectYear(null))
            // if (movieRankingState === MovieRankingState.default) {
            //   setMovieRankingState(MovieRankingState.top10rev)
            // } else {
            //   setMovieRankingState(MovieRankingState.default)
            // }
          }}
        >
          <Pill title={PillsOptions.top10rev}></Pill>
        </div>
        <div
          onClick={() => {
            dispatch(selectYear(null))
            dispatch(movieRanking(MovieRankingState.top10revYear))
          }}
        >
          <Pill title={PillsOptions.top10revYear}></Pill>
        </div>
      </PillsWrapper>

      <YearSelect />

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
