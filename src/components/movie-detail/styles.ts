import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const MovieDetailBody = styled.div`
  padding: 30px 58px 0px 58px;

  /* top: 71px; */

  @media only screen and (max-width: 600px) {
    padding: 16px 16px 0 16px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    h1 {
      margin: 0;
    }

    .button-wrapper {
      position: absolute;
      top: 32px;
      right: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 10px;
        color: ${colors.icon};
      }

      &:hover {
        color: ${colors.text};
        background: ${colors.hoverBackground};
      }

      @media only screen and (max-width: 600px) {
        position: relative;
        top: 0;
        right: 0;
      }
    }
  }

  .ornament {
    width: 52px;
    border-bottom: 2px solid ${colors.dialogOrnament};
  }

  p {
    margin: 0;
  }

  .dialog-content {
    margin: 16px 0 30px 0;

    .info {
      margin-bottom: 16px;

      h2 {
        font-size: 14px;
        line-height: 1;
        color: ${colors.dialogTitles};
        margin-bottom: 4px;
      }

      p {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        color: ${colors.pill};
      }
    }

    .row {
      display: flex;
      gap: 48px;

      .info {
        .directors,
        .actors {
          font-size: 16px;
          font-weight: 500;
          color: ${colors.dialogDirectors};
          word-break: break-all;
        }
      }
    }

    @media only screen and (max-width: 600px) {
      .mobile-wrapper {
        display: grid;
        grid-gap: 0 2rem;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      }
    }
  }
`
