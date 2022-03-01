import React, { useEffect, useState } from 'react'
import { PillsOptions } from '../../models/pills-options'
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
        {props.title === PillsOptions.top10rev
          ? (
          <span>{props.title}</span>
            )
          : (
          <span onClick={() => useModalState(true)}>{props.title}</span>
            )}
      </PillStyle>
    </>
  )
}
