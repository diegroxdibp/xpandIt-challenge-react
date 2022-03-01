import { MovieRankingState } from '../../models/movie-ranking-status'

const movieRankingStateReducer = (
  state = { state: MovieRankingState.default },
  action = {
    type: MovieRankingState.default,
    payload: MovieRankingState.default
  }
) => {
  switch (action.type) {
    case MovieRankingState.top10rev:
      if (state.state === action.payload) {
        return Object.assign({}, state, { state: MovieRankingState.default })
      } else {
        return Object.assign({}, state, { state: action.payload })
      }

    case MovieRankingState.top10revYear:
      return Object.assign({}, state, { state: action.payload })

    default:
      return state
  }
}

export default movieRankingStateReducer
