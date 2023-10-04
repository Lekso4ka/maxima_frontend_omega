import React from 'react';
import Profile from '../pages/Profile'
import NewsPages from "../pages/News";
import UsersPages from "../pages/Users";
import MaterialsPages from "../pages/Materials";

export const profileConfig = {
    "PARTNER": {
        menu: [
            {
                name: 'Главная',
                path: '/',
                component: <Profile/>,
                isMenuItem: true,
                exact: true,
            },

            {
                name: 'Пользователи',
                path: '/users',
                component: <UsersPages/>,
                isMenuItem: true,
                exact: true,
            },

            {
                name: 'Новости',
                path: '/news',
                component: <NewsPages />,
                isMenuItem: true,
                exact: true,
            },

            {
                name: 'Материалы',
                path: '/materials',
                component: <MaterialsPages/>,
                isMenuItem: true,
                exact: true,
            },
        ],
    },
    "STUDENT": {
        menu: [
        ],
    },
    "TEACHER": {
        menu: [
        ],
    },
    "PUBLIC": {
        menu: [
        ],
    },
     
}
