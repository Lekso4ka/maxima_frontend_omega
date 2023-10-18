import React from 'react';
//import React, {useEffect} from 'react'
//import Users from './components/pages/users'
import './CardTable.styles.scss';


class CardTable extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           data: [],
           editId: null
       }
   }

   componentDidMount() {
       fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => {
           this.setState({
               data: data
           })
       })
   }

   addData = (newData) => {
       this.setState({
           data: [...this.state.data, newData]
       })
   }

   deleteData = (id) => {
       this.setState({
           data: this.state.data.filter(item => item.id !== id),
           editId: null
       })
   }

   updateData = (updatedData) => {
       const newData = this.state.data.map(item => {
           if (item.id === updatedData.id) {
               return {...item, ...updatedData}
           }
           return item;
       })
       this.setState({data: newData, editId: null});
   }

   handleDelete = (id) => {
       this.deleteData(id);
   }

   handleEdit = (id) => {
       this.setState({
           editId: id
       })
   }

   handleSubmit = (e) => {
       e.preventDefault();
       const name = e.target.elements.name.value;
       const login = e.target.elements.login.value;
       const role = e.target.elements.role.value;
       const gender = e.target.elements.gender.value;
       const email = e.target.elements.email.value;
       const management = e.target.elements.management.value;
       if (this.state.editId !== null) {
           const updatedData = {
               id: this.state.editId,
               name: name,
               login: login,
               role: role,
               gender: gender, 
               email: email,
               management: management
           }
           this.updateData(updatedData);
       } else {
           const newData = {
               id: Date.now(),
               name: name,
               login: login,
               role: role,
               gender: gender, 
               email: email,
               management: management
           }
           this.addData(newData);
       }
       e.target.reset();
   }

   render() {
       const users = ["Name","Login", "Role","Gender","Email","Management"];
       const rows = this.state.data.map(item => {
           if (item.id === this.state.editId) {
               return (
                   <tr key={item.id}>
                       <td><input type="text" name="name" defaultValue={item.name} /></td>
                       <td><input type="text" name="login" defaultValue={item.login} /></td>
                       <td><input type="text" name="role" defaultValue={item.role} /></td>
                       <td><input type="text" name="gender"  defaultValue={item.gender}/></td>
                       <td><input type="email" name="email" defaultValue={item.email} /></td>
                       <td><input type="text" name="management" defaultValue={item.management} /></td>
                       <td>
                           <button onClick={(e) => {this.handleSubmit(e)}}>Save</button>
                           <button onClick={() => this.deleteData(item.id)}>Delete</button>
                       </td>
                   </tr>
               )
           } else {
               return(
                   <tr key={item.id}>
                       <td>{item.name}</td>
                       <td>{item.login}</td>
                       <td>{item.role}</td>
                       <td>{item.gender}</td>
                       <td>{item.email}</td>
                       <td>{item.management}</td>
                       <td>
                           <button onClick={() => this.handleEdit(item.id)}>Edit</button>
                           <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                       </td>
                   </tr>
               )
           }
       })
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="text" name="name" placeholder="Name" />
                   <input type="text" name="login" placeholder="Login" />
                   <input type="text" name="role" placeholder="Role" />
                   <input type="text" name="gender" placeholder="Gender" />
                   <input type="email" name="email" placeholder="Email" />
                   <input type="text" name="management" placeholder="Management" />
                   <button type="submit">Add</button>
               </form>
               <table>
                   <thead>
                       <tr>
                           {users.map(users => (
                               <th key={users}>{users}</th>
                           ))}
                       </tr>
                   </thead>
                   <tbody>
                       {rows}
                   </tbody>
               </table>
           </div>
       );
   }
}

export default CardTable;



