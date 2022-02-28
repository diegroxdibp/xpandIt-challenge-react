import { MovieRankingState } from '../../models/movie-ranking-status'

const movieRankingStateReducer = (
  action = { type: MovieRankingState.default }
) => {
  switch (action.type) {
    case MovieRankingState.top10rev:
      return MovieRankingState.top10rev

    case MovieRankingState.top10revYear:
      return MovieRankingState.top10revYear

    default:
      return MovieRankingState.default
  }
}

export default movieRankingStateReducer
