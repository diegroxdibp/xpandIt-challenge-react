import React from 'react'
import { PillStyle } from './styles'

interface Props {
  title: string;
}

export const Pill: React.FC<Props> = (props) => {
  return <PillStyle>{props.title}</PillStyle>
}
