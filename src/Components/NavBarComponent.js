import {
  Button,
  Offcanvas,
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AddUser from "./AddUser";
import Home from "./Home";
import EditUser from "./EditUser";
import DashBoard from "./DashBoard";
import CreateVacation from "./CreateVacation";
import ShowUser from "./ShowUser";
function NavBarComponent() {
  return (
    <div className="container">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/showuser/:id" element={<ShowUser />} />
          <Route path="/createvacation/:id" element={<CreateVacation />} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBarComponent;
