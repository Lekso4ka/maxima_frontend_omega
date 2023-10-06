import React  from 'react';
<<<<<<< HEAD
import {person} from './users.json';

const Users = () => {
    return (
        <>
            <h2>Пользователи</h2>
            <div>
                <h3>TEACHER</h3>
                {person.map((person) => (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                    </div>
                ))}
            </div>
           <div>
                <h3>STUDENT</h3>
                {person.map((person) => (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for{' '}
                            {person.accomplishment}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};
=======

function Users() {
    return <h2>Пользователи</h2>
}
>>>>>>> master





           
    

export default Users;