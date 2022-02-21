import styled from 'styled-components'
import { colors } from '../styles/colors'

// <span>RANKING</span>
// <span className="title">TITLE</span>
// <span>YEAR</span>
// <span>REVENUE</span>
// <span></span>

export const MovieGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 5px;

  .title {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;

    .title {
      margin: 0 auto;
    }
  }
`

export const MovieGridHeader = styled(MovieGrid)`
  height: fit-content !important;
  margin: 30px 0 5px 0;

  span {
    display: flex;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    color: ${colors.primary};
  }

  @media only screen and (max-width: 600px) {
    margin-top: 16px;

    span {
      display: inline-flex;
    }
  }
`
export const MovieInfo = styled(MovieGrid)`
  height: 50px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }

  .title {
    justify-content: flex-start;
  }

  mat-icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    span {
      text-align: center;
      justify-content: center;
      font-size: 14px;
    }

    .title {
      justify-content: center;
    }
  }
`
