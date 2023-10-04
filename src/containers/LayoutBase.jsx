import React from 'react'
import AppRouter from '../components/smart/AppRouter';
import { Layout } from 'antd';
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import CardNews from '../components/ui/CardNews/CardNews';
import { news } from '../assets/data/data';
import Header from "../components/Header/Header";

const {Content } = Layout;

function LayoutBase () {

    return (
    
      <Layout>
        <Header />

      {news.map(myNew => <CardNews myNew={myNew} />)}
      <Content className={'container'}>
                <AppRouter />
            </Content>
      <Router>
  <Route path="/home "element="<pages>"/>   
<Route path="/users"element="<pages>"/>
<Route path="/news"element ="<pages>"/>
<Route path="/materials"element ="<pages>"/>
    </Router>
    </Layout>
   )
      
  }



export default LayoutBase;
