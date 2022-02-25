import React, { useEffect, useState } from 'react'
import { MovieRankingState } from '../../models/movie-ranking-status'
import { PillsOptions } from '../../models/pills-options'
import YearSelect from '../year-select/year-select'
import { PillStyle } from './styles'

interface Props {
  title: string;
  onClick?: Function;
  handleClose?: Function[];
}

export const Pill: React.FC<Props> = (props) => {
  const [modalState, useModalState] = useState<boolean>(false)
  useEffect(() => {
    useModalState(modalState)
  }, [modalState])
  return (
    <>
      <PillStyle>
        {props.title === PillsOptions.top10revYear
          ? (
          <span onClick={() => useModalState(true)}>{props.title}</span>
            )
          : (
          <span>{props.title}</span>
            )}
      </PillStyle>

      <YearSelect
        show={modalState}
        handleClose={(year) => {
          useModalState(false)
          props.handleClose[0](year)
          props.handleClose[1](MovieRankingState.top10revYear)
          console.log('Selected Yead ->', year)
        }}
      ></YearSelect>
    </>
  )
}
