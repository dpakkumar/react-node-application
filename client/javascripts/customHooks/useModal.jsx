import React, { useState } from 'react';
import Modal from '../components/Modal';

const useModal = (isOpen = false, overlayClassName = '', elementId = '#root') => {
  const [modalState, setModalState] = useState({isOpen: isOpen, overlayClassName});
  
  const openModal = () => {
    setModalState(prevData => ({
      ...prevData,
      isOpen: true,
    }));
  };

  const handleCloseModal = () => {
    setModalState(prevData => ({
      ...prevData,
      isOpen: false,
    }));
  };

  const RenderModal = ModalComponent => {  
    return (
      <Modal
        isOpen={modalState.isOpen}
        closeModal={handleCloseModal}
        overlayClassName={modalState.overlayClassName}
        elementId={elementId}
        style={{
          content: {
            backgroundColor: '#F3F4F5',
          },
        }}
      >
        <div className='Modal-123'></div>
        <ModalComponent closeModal={handleCloseModal} />
      </Modal>
    );
  };
  return { openModal, RenderModal };
};

export default useModal;