import React from 'react';

import { Router } from "react-router-dom";
import './style/style.scss'


const Link = () => {
  return (
 
    <Router>
<Link to="#home">Главная</Link>
<Link to="#users">Пользователи</Link>
<Link to="#news">Новости</Link>
<Link to="#materials">Материалы</Link>
    </Router>
    
)

}
 
export default Link;