import { MoviePageBody } from './styles'
import { MovieRankingList } from '../../components/movie-list/movie-list'
import { useSelector } from 'react-redux'
import YearSelect from '../../components/year-select/year-select'
import { RootState } from '../../redux/reducers'
import { MenuRanking } from '../../components/menu-pills/menu-ranking'
import { MenuRankingHeader } from '../../components/movie-rankings-header/movie-rankings-header'

export const MovieRanking = () => {
  const YEAR_SELECTION = useSelector((state: RootState) => state.yearSelection)
  return (
    <MoviePageBody>
      <h1>Movie ranking</h1>

      <MenuRanking />

      {YEAR_SELECTION.state ? <YearSelect /> : null}

      <MenuRankingHeader />
      <MovieRankingList />
    </MoviePageBody>
  )
}
