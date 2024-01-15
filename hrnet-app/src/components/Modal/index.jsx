import Close from '../../assets/close.png'
import './modal.css'

const Modal = ({ isOpen, onClose, children, contentBtn}) => {
 
  const modalClasses = `modal-overlay ${isOpen ? 'open' : ''}`;
  const contentClasses = `modal-content ${isOpen ? 'open' : ''}`;

  return (
    <div className={modalClasses}>
      <div className={contentClasses}>
        <button onClick={onClose} className="close-btn">
          {contentBtn}
        </button>
        {children}
        <div className='close-icone'>
        <img src={Close} onClick={onClose} alt="close modal" className='icone'/>
        </div>
      </div>
    </div>
  );
};



export default Modal;