import React from 'react';
import NewsPage from "../pages/News";

export const profileConfig = {
    "PARTNER": {
        menu: [
            {
                name: 'КУРСЫ',
                path: '/News',
                component: <pages/>,
                isMenuItem: true,
                exact: true,
            },
            {
                name: 'ПОЛЬЗОВАТЕЛИ',
                path: '/News',
                component: <pages/>,
                isMenuItem: true,
                exact: true,
            },
            {
                name: 'НОВОСТИ',
                path: '/News',
                component: <pages/>,
                isMenuItem: true,
                exact: true,
            },
            {
                name: 'МАТЕРИАЛЫ',
                path: '/News',
                component: <pages/>,
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



export default NewsPage;