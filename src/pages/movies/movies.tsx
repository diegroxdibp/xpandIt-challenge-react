/* eslint-disable no-tabs */
import { Pill } from '../../components/pill/pill'
import { MovieGridHeader } from '../../components/movie-grid'
import { MoviePageBody, PillsWrapper } from './styles'
import { DividerHeader } from '../../components/divider'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { useState } from 'react'
import { MovieRankingList } from '../../components/movie-list/movie-list'
// import { useState } from 'react'
// import { PillState } from '../../hooks/pill-status'

export const MovieRanking = () => {
  const [movieRankingState, useMovieRankingState] = useState<MovieRankingState>(
    MovieRankingState.default
  )
  return (
    <MoviePageBody>
      <h1>Movie ranking</h1>
      <PillsWrapper>
        <div onClick={() => useMovieRankingState(MovieRankingState.top10rev)}>
          <Pill title="Top 10 Revenue"></Pill>
        </div>
        <Pill title="Top 10 Revenue per Year"></Pill>
      </PillsWrapper>

      <MovieGridHeader>
        <span>RANKING</span>
        <span className="title">TITLE</span>
        <span>YEAR</span>
        <span>REVENUE</span>
        <span></span>
      </MovieGridHeader>
      <DividerHeader />

      <MovieRankingList state={movieRankingState}></MovieRankingList>

      {/* <Link to="/pageB">Navigate to Page B</Link> */}
    </MoviePageBody>
  )
}
