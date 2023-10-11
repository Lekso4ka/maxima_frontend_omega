import React, { useState } from 'react';
import {news} from "../../assets/data/data";
import CardNews from "../../components/ui/CardNews/CardNews";
import ModalWin from "../../components/ui/ModalWin/ModalWin";

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <h2>Главная</h2>
            {news.map(myNew => <CardNews myNew={myNew}/>)}
            <div className={'wrapper'}>
                <h1>Откройте пожалуйста модальное окно! :D </h1>
                <button 
                    className={'buttonOpen'} 
                    onClick={() => { setModalOpen(true); }}
                > ОТКРЫТЬ </button>
                {modalOpen && <ModalWin setOpenModal={setModalOpen}> 
                    <h2>Вы только что открыли модальное окно! </h2>
                    <p>Поздравляем!</p>
                </ModalWin>}
            </div>
        </>
    );
};

export default Home;