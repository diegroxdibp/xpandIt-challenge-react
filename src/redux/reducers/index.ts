import { combineReducers } from 'redux'
import movieRankingStateReducer from './movie-ranking-state-reducer'
import yearReducer from './year-reducer'

const rootReducer = combineReducers({
  movieRanking: movieRankingStateReducer,
  year: yearReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
