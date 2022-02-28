import { MovieRankingState } from '../../models/movie-ranking-status'

export const movieRanking = (
  ranking: MovieRankingState = MovieRankingState.default
) => {
  switch (ranking) {
    case MovieRankingState.default:
      return {
        type: ranking
      }
    case MovieRankingState.top10rev:
      return {
        type: ranking
      }
    case MovieRankingState.top10revYear:
      return {
        type: ranking
      }
  }
}
