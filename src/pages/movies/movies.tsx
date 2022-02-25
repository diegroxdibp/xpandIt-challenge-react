import { Pill } from '../../components/pill/pill'
import { MovieGridHeader } from '../../components/movie-grid'
import { MoviePageBody, PillsWrapper } from './styles'
import { DividerHeader } from '../../components/divider'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { useState } from 'react'
import { MovieRankingList } from '../../components/movie-list/movie-list'
import { PillsOptions } from '../../models/pills-options'

export const MovieRanking = () => {
  const [movieRankingState, setMovieRankingState] = useState<MovieRankingState>(
    MovieRankingState.default
  )
  const [selectedYear, setSelectedYear] = useState<number>()
  return (
    <MoviePageBody>
      <h1>Movie ranking</h1>
      {/* // TODO REFACTOR */}
      <PillsWrapper>
        <div
          onClick={() => {
            if (movieRankingState === MovieRankingState.default) {
              setMovieRankingState(MovieRankingState.top10rev)
            } else {
              setMovieRankingState(MovieRankingState.default)
            }
          }}
        >
          <Pill title={PillsOptions.top10rev}></Pill>
        </div>
        <Pill
          title={PillsOptions.top10revYear}
          handleClose={[setSelectedYear, setMovieRankingState]}
        ></Pill>
      </PillsWrapper>

      <MovieGridHeader>
        <span>RANKING</span>
        <span className="title">TITLE</span>
        <span>YEAR</span>
        <span>REVENUE</span>
        <span></span>
      </MovieGridHeader>
      <DividerHeader />

      <MovieRankingList
        state={movieRankingState}
        year={selectedYear}
      ></MovieRankingList>
    </MoviePageBody>
  )
}
