import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import 'holderjs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

import AboutPage from './views/about/index';
import HomePage from './views/home';
import LoginPage from './views/login';
import DetailsPage from './views/details';
import CreatePage from './views/create';

function App() {

  return (
    <>
      <Router>
        {/* Nav bar with login and links */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">My Articles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Update" id="basic-nav-dropdown">
                <NavDropdown.Item href="/create">Create</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Edit</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Delete</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        {/* Switch to route between the different pages depending on the url */}
        <Switch>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/details">
            <DetailsPage></DetailsPage>
          </Route>
          <Route path="/create">
            <CreatePage></CreatePage>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
          
        </Switch>

    </Router>
    </>
    
  );
}

export default App;
