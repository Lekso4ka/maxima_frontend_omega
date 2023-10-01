import React from 'react'
import AppRouter from '../components/smart/AppRouter'
import Header from "../components/ui/Header/HeaderBase";
import { Layout } from 'antd';
import ModalWin from "../components/ui/ModalWin/ModalWin";
import { useState } from "react";
import "./LayoutBase.css";

const { Footer, Content } = Layout;


function LayoutBase() {
    const [modalOpen, setModalOpen] = useState(false);

    return (

        <Layout>
            <Header />
            <Content className={'container'}>
                <AppRouter />
            </Content>
            <div className={'wrapper'}>
                <h1>Откройте пожалуйста модальное окно! :D </h1>
                <button className={'buttonOpen'} onClick={() => { setModalOpen(true); }}> ОТКРЫТЬ </button>
                {modalOpen && <ModalWin setOpenModal={setModalOpen} />}
            </div>
            <Footer>© Учебный центр Maxima</Footer>
        </Layout>
    )
}

export default LayoutBase
