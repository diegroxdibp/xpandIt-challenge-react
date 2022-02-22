import React from 'react'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { DefaultRanking } from '../movie-rankings/default-ranking'
import { Top10 } from '../movie-rankings/top10'

interface Props {
  state: MovieRankingState;
}

export const MovieRankingList: React.FC<Props> = (props) => {
  switch (props.state) {
    case MovieRankingState.default:
      return <DefaultRanking />

    case MovieRankingState.top10rev:
      return <Top10 />
  }
}
