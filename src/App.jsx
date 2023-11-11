
import React, {useEffect} from 'react'
import './style/style.scss'
import LayoutBase from './containers/LayoutBase'

import AuthService from "./core/services/AuthService";
import {useDispatch, useSelector} from "react-redux";
import {login, logOut} from "./core/store/features/user/userSlice";

import Login from "./pages/Login";

function App() {
    const user = useSelector(state => state.user)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch();
    
    useEffect(() => {
      if (token) {
        AuthService.checkToken(token)
            .then(() => dispatch(login(token)))
            .catch(() => dispatch(logOut()))
      }
      console.log(user.isAuth);
    }, [])

      return (<>
        {/* {user.role} */}
        {user.isAuth ? <LayoutBase/> : <Login/>}
      </>)
}


export default App;
