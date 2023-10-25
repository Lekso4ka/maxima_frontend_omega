import React from 'react';
import './CardTable.scss';
///mport CardTable from './components/ui/CardTable/CardTable';
import users from "../../../assets/data/users.json";

 function CardTable () {
    return (   
          
<div className="Table">
  <table>

  <tr className="table th">
  <th>Роль </th>
    <th>Фамилия </th>
    <th>Имя</th>
    <th>Отчество</th>
    <th>Логин</th>
    <th>Электронный адрес</th>
    <th>Возраст </th>
    <th>Управление </th>
  </tr>
  {users.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td className="table_role">{val.role}</td>
                          <td className="table_firstName">{val.firstName}</td>
                          <td className="table_lastName">{val.lastName}</td>
                            <td className="table_patronymic" >{val.patronymic}</td>
                            <td className="table_login">{val.login}</td>
                            <td className="table_email" >{val.email}</td>
                            <td className="table_birthDate" >{val.birthDate}</td>
                            <td className="table_management">{val.management}<button className="button" onclick="showDetails(this)"><a href="http://localhost:3000/users">Управление</a> </button></td>
        
                        </tr>
                    )
                })}

</table>
</div>
 );

}

export default CardTable;



