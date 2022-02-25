import React from 'react'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { DefaultRanking } from '../movie-rankings/default-ranking'
import { Top10 } from '../movie-rankings/top10'
import { Top10ByYear } from '../movie-rankings/top10byYear'

interface Props {
  state: MovieRankingState;
  year?: number;
}

export const MovieRankingList: React.FC<Props> = (props) => {
  switch (props.state) {
    case MovieRankingState.default:
      return <DefaultRanking />

    case MovieRankingState.top10rev:
      return <Top10 />

    case MovieRankingState.top10revYear:
      return <Top10ByYear year={props.year} />
  }
}
