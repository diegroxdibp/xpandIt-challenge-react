import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const PillBody = styled.div`
  width: fit-content;
  font-size: 12px;
  font-weight: 300;
  border-radius: 20px;
  color: ${colors.pill};
  border: 1px solid ${colors.pillBorder};
  padding: 8px 12px;
  cursor: pointer;
`
