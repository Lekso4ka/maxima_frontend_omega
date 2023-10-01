import React, {useEffect} from 'react'
import './style/style.scss'

import AppRouter from '../components/smart/AppRouter'
import AuthService from "./core/services/AuthService";
import {useDispatch} from "react-redux";
import {login, logOut} from "./core/store/features/user/userSlice";
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
//import AppRouter from './components/AppRouter.js'
//import { Route } from "react-router-dom";
//import Header from "../components/Header/Header";


function App() {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch();

    useEffect(() => {
        AuthService.checkToken(token)
            .then(() => dispatch(login(token)))
            .catch(() => dispatch(logOut()))
    }, [])


    return (

        //<Header>
        <AppRouter>
        <Route path="/courses" element={<Link />}></Route>
        <Route path="/users" element={<Link />}></Route>
        <Route path="/news" element={<Link />}></Route>
        <Route path="/materials" element={<Link />}></Route>
        </AppRouter>
// </Header>
    )
}




export default App;
