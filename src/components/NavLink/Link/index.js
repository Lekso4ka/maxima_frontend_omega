import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//import { Link } from 'react-router-dom';



function Link () {
  return (
    <Navbar bg="maxima" variant="maxima">
      <Navbar.Brand href="#profile"> Учебный центр Maxima</Navbar.Brand>
      <Nav className="maxima">
        <Nav.Link href="#courses">Курсы</Nav.Link>
        <Nav.Link href="#users">Пользователи</Nav.Link>
        <Nav.Link href="#news">Новости</Nav.Link>
        <Nav.Link href="#materials">Материалы</Nav.Link>
      </Nav>
    </Navbar>
  );
}
 
export default Link;