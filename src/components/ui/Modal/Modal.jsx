import React from 'react';
import "./Modal.scss";

const Modal = ({active,setActive,setOpenModal, children}) => {

  return (
    <>
     
      <div className={active ?"modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ?"modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
      <active className={'open_button'} onClick={() => setOpenModal(true)} />
          {children}
          </div>
        </div>
    </>
  );
};


export default Modal;