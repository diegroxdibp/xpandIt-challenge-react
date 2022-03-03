import { FC } from 'react'
import { DividerHeader } from '../divider'
import { MovieGridHeader } from '../movie-grid'

export const MenuRankingHeader: FC = () => {
  return (
    <>
      <MovieGridHeader>
        <span>RANKING</span>
        <span className="title">TITLE</span>
        <span>YEAR</span>
        <span>REVENUE</span>
        <span></span>
      </MovieGridHeader>
      <DividerHeader />
    </>
  )
}
