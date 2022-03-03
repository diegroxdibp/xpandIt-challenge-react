import { MovieRankingState } from '../../models/movie-ranking-status'

const movieRankingStateReducer = (
  state = { state: MovieRankingState.default },
  action = {
    type: MovieRankingState.default,
    payload: MovieRankingState.default
  }
) => {
  switch (action.type) {
    case MovieRankingState.default:
      return Object.assign({}, state, { state: action.payload })

    case MovieRankingState.top10rev:
      return Object.assign({}, state, { state: action.payload })

    case MovieRankingState.top10revYear:
      return Object.assign({}, state, { state: action.payload })

    default:
      return Object.assign({}, state, { state: state.state })
  }
}

export default movieRankingStateReducer
