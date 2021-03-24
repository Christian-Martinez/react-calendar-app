import React, { useState } from 'react';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    // TODO: cerrar el modal
    setOpen(false);
  };

  return (
    <Modal
      isOpen={open}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className='modal'
      overlayClassName='modal-fondo'
    >
      <h1> hola mundo</h1>
      <hr />
    </Modal>
  );
};
