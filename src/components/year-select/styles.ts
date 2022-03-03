import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const YearSelectBackdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  z-index: 10;
`

export const YearSelectWindow = styled.div`
  dislplay: flex;
  position: fixed;
  background: white;
  display: flex;
  height: fit-content;
  padding: 13px 0;
  flex-direction: column;
  background: white;
  align-items: center;
  animation: growDown 600ms ease-in-out forwards;
  transform-origin: top center;
  z-index: 11;

  h1 {
    font-size: 12px;
    line-height: 14px;
    color: ${colors.dialogTitles};
    margin: 3px 0 14px 0;
    padding: 0 55px;
  }

  span {
    height: 17px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.text};
    padding: 4px 0;
    text-align: center;
    cursor: pointer;
  }

  span:hover {
    background: ${colors.hoverBackground};
  }

  span:last-child {
    margin-bottom: 0;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.05);
    }
    100% {
      transform: scaleY(1);
    }
  }
`
