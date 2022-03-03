import { FC } from 'react'
import { Movie } from '../../models/movie'
import { Modal, ModalOverlay } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../styles/colors'
import { getMoviesFullDescription } from '../../services/movies.service'
interface Props {
  handleClose: Function;
  show: string;
  movie: Movie;
}

const MovieDetail: FC<Props> = (props) => {
  const movie = getMoviesFullDescription(props.movie.id)

  const showHideclassNameName = props.show
    ? { display: 'block' }
    : { display: 'none' }

  return (
    <ModalOverlay style={showHideclassNameName}>
      <Modal>
        <header>
          <h1> {movie && movie.title}</h1>

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
            <p>{movie && movie.year}</p>
          </div>

          <div className="info">
            <h2>Genre</h2>
            <p>{movie && movie.genre}</p>
          </div>

          <div className="info">
            <h2>Description</h2>
            <p>{movie && movie.description}</p>
          </div>

          <div className="row">
            <div className="info">
              <h2>Director</h2>
              <p className="directors">{movie && movie.director}</p>
            </div>
            <div className="info">
              <h2>Actors</h2>
              <p className="actors">{movie && movie.actors}</p>
            </div>
          </div>

          <div className="mobile-wrapper">
            <div className="info">
              <h2>Runtime</h2>
              <p>{movie && movie.runtime}</p>
            </div>

            <div className="info">
              <h2>Rating</h2>
              <p>{movie && movie.rating}</p>
            </div>

            <div className="info">
              <h2>Votes</h2>
              <p>{movie && movie.votes}</p>
            </div>

            <div className="info">
              <h2>Revenue</h2>
              <p>{movie && movie.revenue}</p>
            </div>

            <div className="info">
              <h2>Metascore</h2>
              <p>{movie && movie.metascore}</p>
            </div>
          </div>
        </div>
      </Modal>
    </ModalOverlay>
  )
}

export default MovieDetail
