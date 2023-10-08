import React from "react";
import "./ModalWin.css";
import { CloseCircleOutlined } from '@ant-design/icons';


function ModalWin({ setOpenModal, children }) {

  return (
    <>
      <div className={'backdrop'}>
        <div className={'modal'}>
          <CloseCircleOutlined className={'buttonModal'} onClick={() => setOpenModal(false)} />
          {/*  <button className={'buttonModal'} onClick={() => setOpenModal(false)}> X</button> */}
          {/*  <div className={'contentModal'}>
            <h2>Вы только что открыли модальное окно! </h2>
            <p>Поздравляем!</p>
          </div> */}
          {children}
          <img src="./images/cathello.jpg" alt="" />
          <div className={'footerModal'}>
            <button className={'cancel'}
              onClick={() => {
                setOpenModal(false);
              }}>Закрыть</button>
            <button> Продолжить </button>

          </div>
        </div>
      </div>
    </>
  );
};






export default ModalWin;