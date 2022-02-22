import React from 'react'
import { Movie } from '../../models/movie'
import './modal.css'

interface Props {
  handleClose: Function;
  show: boolean;
  movie: Movie;
}

const Modal: React.FC<Props> = (props) => {
  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.movie.title}
        <button type="button" onClick={() => props.handleClose()}>
          Close
        </button>
      </section>
    </div>
  )
}

export default Modal
