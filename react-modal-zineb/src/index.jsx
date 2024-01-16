
import PropTypes from 'prop-types'
import './modal.css'

const Modal = ({ isOpen, onClose, children, contentBtn }) => {
  const modalClasses = `modal-overlay ${isOpen ? 'open' : ''}`
  const contentClasses = `modal-content ${isOpen ? 'open' : ''}`

  return (
    <div className={modalClasses}>
      <div className={contentClasses}>
        <div className="close-icone">
          <button onClick={onClose}  className='icone'>&times;</button>
        </div>

        {children}
        <button onClick={onClose} className="close-btn">
          {contentBtn}
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  contentBtn: PropTypes.node.isRequired,
}

export default Modal
