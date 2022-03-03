import { FC } from 'react'
import { PillsOptions } from '../../models/pills-options'
import { Pill } from '../pill/pill'
import { PillsWrapper } from './styles'

export const MenuRanking: FC = () => {
  return (
    <PillsWrapper>
      <Pill title={PillsOptions.top10rev}></Pill>

      <Pill title={PillsOptions.top10revYear}></Pill>
    </PillsWrapper>
  )
}
