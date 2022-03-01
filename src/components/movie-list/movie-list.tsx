import { FC } from 'react'
import { useSelector } from 'react-redux'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { RootState } from '../../redux/reducers'
import { DefaultRanking } from '../movie-rankings/default-ranking'
import { Top10 } from '../movie-rankings/top10'
import { Top10ByYear } from '../movie-rankings/top10byYear'

export const MovieRankingList: FC = () => {
  const MOVIE_RANKING = useSelector((state: RootState) => state.movieRanking)
  const YEAR = useSelector((state: RootState) => state.year)
  switch (MOVIE_RANKING.state) {
    case MovieRankingState.default:
      return <DefaultRanking />

    case MovieRankingState.top10rev:
      return <Top10 />

    case MovieRankingState.top10revYear:
      return YEAR.state ? <Top10ByYear /> : null
  }
}
