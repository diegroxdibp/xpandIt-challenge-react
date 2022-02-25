import { FC } from 'react'
import { getMoviesYears } from '../../services/movies.service'
import { YearSelectBackdrop, YearSelectWindow } from './styles'

interface Props {
  handleClose: Function;
  show: boolean;
}

const YearSelect: FC<Props> = (props) => {
  const moviesYears = getMoviesYears()

  const showHideClassName = props.show
    ? { display: 'flex' }
    : { display: 'none' }

  return (
    <YearSelectBackdrop style={showHideClassName}>
      <YearSelectWindow>
        <h1>Select a year</h1>
        {moviesYears.map((movieYear: number) => (
          <span key={movieYear} onClick={() => props.handleClose(movieYear)}>
            {movieYear}
          </span>
        ))}
      </YearSelectWindow>
    </YearSelectBackdrop>
  )
}

export default YearSelect
