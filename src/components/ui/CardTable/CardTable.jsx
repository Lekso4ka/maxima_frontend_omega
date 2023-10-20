import React from 'react';
import './Table.scss';
//import CardTable from './components/ui/CardTable/CardTable';
//import {users} from "../../assets/data/users.json";

const users = [

  { role: 'teacher', firstName: '', lastName: '',Login: '',Email:'',Phonenumber:'',Status:'',Management:''},
  { role: 'student', firstName: '', lastName: '',Login: '',Email:'',Phonenumber:'',Status:'',Management:''}
];

 function CardTable () {
    return (   
          
<div className="Table">
  <table>
  <tr>
    <th>Фамилия Имя Отчество</th>
    <th>Логин</th>
    <th>Роль</th>
    <th>Возраст </th>
    <th>Электронный адрес</th>
    <th>Управление </th>
  </tr>
  {users.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Lastname}</td>
                            <td>{val.Login}</td>
                            <td>{val.Email}</td>
                            <td>{val.Phonenumber}</td>
                            <td>{val.Status}</td>
                            <td>{val.Management}</td>
                        </tr>
                    )
                })}

</table>
</div>
 );

}

export default CardTable;



