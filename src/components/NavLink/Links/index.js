import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NewsPage from "../pages/News";
 
function Navigation() {
  return (
    <Navbar bg="maxima" variant="maxima">
      <Navbar.Brand href="#home"> Учебный центр Maxima</Navbar.Brand>
      <Nav className="maxima">
        <Nav.Link href="#news">Курсы</Nav.Link>
        <Nav.Link href="#news">Пользователи</Nav.Link>
        <Nav.Link href="#news">Новости</Nav.Link>
        <Nav.Link href="#news">Материалы</Nav.Link>
      </Nav>
    </Navbar>
  );
}
 
export default Navigation;