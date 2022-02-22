import React, { useEffect, useState } from 'react'
import { PillsOptions } from '../../models/pills-options'
import YearSelect from '../year-select/year-select'
import { PillStyle } from './styles'

interface Props {
  title: string;
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
        handleClose={() => {
          useModalState(false)
        }}
      ></YearSelect>
    </>
  )
}
