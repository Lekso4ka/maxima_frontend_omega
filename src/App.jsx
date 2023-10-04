import React, {useEffect} from 'react'
import './style/style.scss'
import LayoutBase from './containers/LayoutBase'
import AuthService from "./core/services/AuthService";
import {useDispatch} from "react-redux";
import {login, logOut} from "./core/store/features/user/userSlice";
import { Router,Route, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom"
import  Home   from './Home';
import Materials from './Materials';
import News  from './News';
import Users  from './Users'; 
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

  <LayoutBase/>
)
  
}
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;

function Home(){ return <h2>Главная</h2>; }
function Users(){ return <h2>Пользователи</h2>; }
function News(){return <h2>Новости</h2>; }
function Materials (){return <h2>Материалы</h2>; }
function Content(){
    return <div>
            <h2></h2>
          </div>;
}
function Nav(){
    return <nav>
              <Link to="/home">Главная</Link>
              <Link to="/users">Пользователи</Link>
              <Link to="/news">Новости</Link>
              <Link to="/materials">Материалы</Link>
        </nav>;
}
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
  <Router>
      <div>
        <Nav />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={ <Users/>} />
          <Route path="/news" element={<News />} />
          <Route path="materials" element={<Materials />} />
      </div>
  </Router>
  );
  
 
 
export default App;
