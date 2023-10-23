import React  from 'react';
import CardTable from'../../components/ui/CardTable/CardTable';
//import usersTable from "../../assets/data/users.json";
import './users.scss';

const Users = () => {
  return <>
  <h2 className="name_users">Пользователи</h2>
  <CardTable/>
  </>
 
};


export default Users;