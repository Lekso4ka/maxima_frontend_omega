import Profile from '../pages/Profile'
import NewsPage from "../pages/News";
import UsersPage from "../pages/Users";
import MaterialsPage from "../pages/Materials";



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
                component: <UsersPage/>,
                isMenuItem: true,
                exact: true,
            },

            {
                name: 'Новости',
                path: '/news',
                component: <NewsPage />,
                isMenuItem: true,
                exact: true,
            },

            {
                name: 'Материалы',
                path: '/materials',
                component: <MaterialsPage/>,
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
