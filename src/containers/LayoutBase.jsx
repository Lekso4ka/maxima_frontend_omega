import React from 'react'
import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header";
import Home from '../pages/Home/home.jsx';
import Materials from '../pages/Materials/Materials';
import News from '../pages/News';
import Users from '../pages/Users/users';


const { Content, Footer } = Layout;


function LayoutBase() {

    return (
        <Layout>

            <Header />
            <Content className={'container'}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/materials" element={<Materials />} />
                </Routes>
            </Content>
            <Footer>© Учебный центр Maxima</Footer>
        </Layout>
    )
}

export default LayoutBase;
