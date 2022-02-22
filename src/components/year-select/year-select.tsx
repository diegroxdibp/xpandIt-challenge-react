import React from 'react'
import './modal.css'

interface Props {
  handleClose: Function;
  show: boolean;
}

const YearSelect: React.FC<Props> = (props) => {
  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <span>2022</span>
        <span>2021</span>
        <span>2020</span>
        <button type="button" onClick={() => props.handleClose()}>
          Close
        </button>
      </section>
    </div>
  )
}

export default YearSelect
