import React from 'react'
import AppRouter from '../components/smart/AppRouter'
import Header from "../components/ui/Header/HeaderBase";
import { Layout } from 'antd';
import CardNews from '../components/ui/CardNews/CardNews'
import { news } from '../assets/data/data'

const { Footer, Content } = Layout;

function LayoutBase() {

    return (
        <Layout>
            <Header />
            {news.map(myNew => <CardNews myNew={myNew} />)}
            <Content className={'container'}>
                <AppRouter />
            </Content>
            <Footer>© Учебный центр Maxima</Footer>
        </Layout>
    )
}

export default LayoutBase
