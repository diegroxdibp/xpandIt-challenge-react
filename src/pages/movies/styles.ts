import styled from 'styled-components'

export const MoviePageBody = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  width: 70%;
  margin: 0 auto;
  overflow-x: hidden;

  & > h1 {
    margin-top: 1.5rem;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`

export const PillsWrapper = styled.div`
  display: flex;
  gap: 24px;
  height: fit-content;
  margin: 1rem 0;
  align-items: center;
`

export const MoviesWrapper = styled.div`
  display: block;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 50px;
`
