import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { useDispatch } from "react-redux";
import { logOut } from "../../core/store/features/user/userSlice";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import './style.scss'

function Nav() {
      return <nav>
            <Link to="/">Главная</Link>
            <Link to="/courses">Курсы</Link>
            <Link to="/users">Пользователи</Link>
            <Link to="/news">Новости</Link>
            <Link to="/materials">Материалы</Link>
      </nav>
}


const Header = () => {
      const dispatch = useDispatch()
      const logOutHandler = () => dispatch(logOut())
      return (

            <header>
                  <Logo />
                  <Nav />
                  <Button onClick={logOutHandler} icon={<LogoutOutlined />} />

            </header>
      )

}


export default Header;