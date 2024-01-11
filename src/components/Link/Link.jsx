import React from 'react';

import { Router } from "react-router-dom";
import './Link.scss';


const Link = () => {
  return (
 
    <Router>
<Link  className='home_link'  to="#home">Главная</Link>
<Link className='courses_link' to="#courses">Курсы</Link>
<Link className='users_link' to="#users">Пользователи</Link>
<Link className='news_link'  to="#news">Новости</Link>
<Link className='materials_link'  to="#news">Материалы</Link>
    </Router>
    
)

}
 
export default Link;