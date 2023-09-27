import React from 'react'
import AppRouter from '../components/smart/AppRouter'
import Header from "../components/ui/Header/HeaderBase";
import { Layout } from 'antd';
import CardNews from '../components/ui/CardNews/CardNews'


const { Footer, Content } = Layout;

function LayoutBase() {

    return (
        <Layout>
            <Header />
            <CardNews />
            <Content className={'container'}>
                <AppRouter/>
            </Content>
            <Footer>© Учебный центр Maxima</Footer>
        </Layout>
    )
}

export default LayoutBase
