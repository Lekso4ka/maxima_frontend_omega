
import React, { Children } from 'react';
import Header from "../components/ui/Header/HeaderBase";
import { Layout } from 'antd';
import ModalWin from "../components/ui/ModalWin/ModalWin";
import { useState } from "react";
import "./LayoutBase.css";
import { Routes, Route } from "react-router-dom";
/* import Header from "../components/Header/Header"; */

import Home from '../pages/Home/home.jsx';
import Materials from '../pages/Materials/Materials';
import News from '../pages/News';
import Users from '../pages/Users/users';

const { Content } = Layout;


function LayoutBase() {
    const [modalOpen, setModalOpen] = useState(false);

    return (

        <Layout>

            <Header />
            <Content className={'container'}>
                <div className={'wrapper'}>
                    <h1>Откройте пожалуйста модальное окно! :D </h1>
                    <button className={'buttonOpen'} onClick={() => { setModalOpen(true); }}> ОТКРЫТЬ </button>
                    {modalOpen && <ModalWin setOpenModal={setModalOpen}>
                        <h2>Вы только что открыли модальное окно! </h2>
                        <p>Поздравляем!</p>
                    </ModalWin>}
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/materials" element={<Materials />} />
                </Routes>
            </Content>
            <Footer>© Учебный центр Maxima</Footer>

        </Layout>
    );

};


export default LayoutBase;
