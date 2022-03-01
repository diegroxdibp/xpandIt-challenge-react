import { MovieRankingState } from '../../models/movie-ranking-status'

export const movieRanking = (ranking: MovieRankingState) => {
  console.log(ranking)
  switch (ranking) {
    case MovieRankingState.default:
      return {
        type: ranking,
        payload: MovieRankingState.default
      }
    case MovieRankingState.top10rev:
      return {
        type: ranking,
        payload: MovieRankingState.top10rev
      }
    case MovieRankingState.top10revYear:
      return {
        type: ranking,
        payload: MovieRankingState.top10revYear
      }
  }
}
