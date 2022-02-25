import { FC } from 'react'
import { getMoviesYears } from '../../services/movies.service'
import './year-select.css'

interface Props {
  handleClose: Function;
  show: boolean;
}

const YearSelect: FC<Props> = (props) => {
  const moviesYears = getMoviesYears()

  const showHideClassName = props.show
    ? 'year-select-backdrop display-flex'
    : 'year-select-backdrop display-none'

  return (
    <div className={showHideClassName}>
      <section className="year-select">
        <h1>Select a year</h1>
        {moviesYears.map((movieYear: number) => (
          <span key={movieYear} onClick={() => props.handleClose(movieYear)}>
            {movieYear}
          </span>
        ))}
      </section>
    </div>
  )
}

export default YearSelect
