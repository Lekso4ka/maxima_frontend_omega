import React from 'react'
import AppRouter from '../components/smart/AppRouter'
import Header from "../components/Header/Header";
//import Header from "../components/ui/Header/HeaderBase";
//import { Layout } from 'antd';
//import LayoutBase  from "../components/ui/containers/LayoutBase";
import { Route } from "react-router-dom";
//import { Router } from "react-router-dom";
//const { Footer, Content } = Layout;

function LayoutBase () {

    return (
       
        <LayoutBase>
        <Header />
        <AppRouter>
    <Route path="/courses" component="<Courses>"/>
<Route path="/users" component="<Users>"/>
<Route path="/news" component="<News>"/>
<Route path="/materials" component="<Materials>"/>
</AppRouter>

</LayoutBase>
  )
}



export default LayoutBase;
