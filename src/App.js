import React from "react";

import { Card, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";
import "./App.css";
function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="container">
          <Navbar bg="light" expand={false}>
            <Container fluid>
              <Navbar.Brand href="/">Vacation Tracker</Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to={"/"}>
                      <Card.Header className="h5 fs-5 text-black-50">
                        Home
                      </Card.Header>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/dashboard"}>
                      <Card.Header className="h5 fs-5 text-black-50">
                        Dash board
                      </Card.Header>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <NavBarComponent />
        </div>
      </React.StrictMode>
    </Router>
  );
}

export default App;
