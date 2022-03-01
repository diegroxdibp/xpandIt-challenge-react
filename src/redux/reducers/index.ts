import { combineReducers } from 'redux'
import movieRankingStateReducer from './movie-ranking-state-reducer'
import yearReducer from './year-reducer'
import yearSelectionReducer from './year-selection-reducer'

const rootReducer = combineReducers({
  movieRanking: movieRankingStateReducer,
  year: yearReducer,
  yearSelection: yearSelectionReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
