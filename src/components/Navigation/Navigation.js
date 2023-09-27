import { Link } from 'react-router-dom';
import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';

const App = (props) => {
  return (
      <Col md={12} >
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <NavLink to={'/'} exact >Account-Owner</NavLink>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <Link to={'/owner-list'} exact>
                          <NavItem eventKey={1}>
                              Owner Actions
                          </NavItem>
                      </Link>
                      <Link to={'/account-list'}>
                          <NavItem eventKey={2}>
                              Account Actions
                          </NavItem>
                      </Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </Col>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
          Курсы
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages" activeClassName="active">
          Пользователи
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages" activeClassName="active">
          Новости
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages" activeClassName="active">
          Материалы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
 
export default Navigation;

