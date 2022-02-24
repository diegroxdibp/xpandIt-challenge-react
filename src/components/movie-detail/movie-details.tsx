import { FC } from 'react'
import { Movie } from '../../models/movie'
import { MovieDetailBody } from './styles'
import './movie-details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../styles/colors'
interface Props {
  handleClose: Function;
  show: string;
  movie: Movie;
}

const MovieDetail: FC<Props> = (props) => {
  const showHideclassNameName = props.show
    ? 'modal display-block'
    : 'modal display-none'

  return (
    <div className={showHideclassNameName}>
      <div className="modal-window">
        <MovieDetailBody>
          <header>
            <h1> {props.movie.title}</h1>

            <div className="button-wrapper" onClick={() => props.handleClose()}>
              <FontAwesomeIcon
                style={{
                  height: '20px',
                  color: `${colors.icon}`,
                  margin: '10px'
                }}
                icon={faX}
              />
              <span>CLOSE</span>
            </div>
          </header>

          <div className="ornament"></div>

          <div className="dialog-content">
            <div className="info">
              <h2>Year</h2>
              <p>{props.movie.year}</p>
            </div>

            {/* <div className="info">
            <h2>Genre</h2>
            <p>{props.movie.genre}</p>
          </div>

          <div className="info">
            <h2>Description</h2>
            <p>{props.movie.description}</p>
          </div> */}

            {/* <div className="row">
            <div className="info">
              <h2>Director</h2>
              <p className="directors">{props.movie.director}</p>
            </div>
            <div className="info">
              <h2>Actors</h2>
              <p className="actors">{props.movie.actors}</p>
            </div>
          </div> */}

            <div className="mobile-wrapper">
              {/* <div className="info">
              <h2>Runtime</h2>
              <p>{props.movie.runtime}</p>
            </div>

            <div className="info">
              <h2>Rating</h2>
              <p>{props.movie.rating}</p>
            </div>

            <div className="info">
              <h2>Votes</h2>
              <p>{props.movie.votes}</p>
            </div> */}

              <div className="info">
                <h2>Revenue</h2>
                <p>{props.movie.revenue}</p>
              </div>

              {/* <div className="info">
              <h2>Metascore</h2>
              <p>{props.movie.metascore}</p>
            </div> */}
            </div>
          </div>
        </MovieDetailBody>
      </div>
    </div>
  )
}

export default MovieDetail
