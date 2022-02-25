import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Image from '../Image';
import './Modal.scss';

const Modal = ({
  elementId, closeImage, overlayClassName, closeModal, children, isOpen,
}) => {
 ReactModal.setAppElement(elementId);
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className="Modal"
        overlayClassName={`Overlay ${overlayClassName}`}
        shouldCloseOnOverlayClick
        onRequestClose={closeModal}
      >
        <button onClick={closeModal} type="button" className="close-button" tabIndex="0">
          <Image className='close-button' src='ic-close.svg' alt="close Modal" />
        </button>
        {children}
      </ReactModal>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element,
  elementId: PropTypes.string,
  isOpen: PropTypes.bool,
  overlayClassName: PropTypes.string,
};

Modal.defaultProps = {
  closeModal: () => {},
  children: <div />,
  elementId: '#root',
  isOpen: false,
  overlayClassName: 'Overlay',
};