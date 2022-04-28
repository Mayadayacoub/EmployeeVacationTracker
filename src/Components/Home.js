import React, { useState } from "react";
import "../App.css";
import { Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function Home() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="container-fluid">
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link to={"/adduser"} className=" btn btn-secondary">
          Add Employee
        </Link>
      </div>
      <Container>
        <div className="col-md-11  my-5">
          <Row>
            <Table
              className="table table-hover table-bordered  responsive"
              size="sm"
            >
              <thead className="text-dark bg-light text-center">
                <tr>
                  <th scope="col">Empoly Id</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  <th scope="col">Code</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Join Date</th>
                  <th scope="col">Birthdate</th>
                  <th scope="col">Marital Status</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col">Vacation</th>
                  <th scope="col">Start</th>
                  <th scope="col">End</th>
                  <th scope="col">AnnualLeave </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-center  ">
                {users.map((user, id) => {
                  return (
                    <tr key={id} className=" ">
                      <td> {id + 1}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.code}</td>
                      <td>{user.phone}</td>
                      <td>{user.gender}</td>
                      <td>{user.joinDate}</td>
                      <td>{user.birthDate}</td>
                      <td>{user.maritalStatus}</td>
                      <td>{user.role}</td>
                      <td>{user.status}</td>
                      <td>{user.vacation}</td>
                      <td>{user.startDate}</td>
                      <td>{user.endDate}</td>
                      <td>{user.annualLeave}</td>
                      <td>
                        {" "}
                        <Link
                          to={`/showuser/${user.id}`}
                          className="btn btn-secondary btn-small  my-2 py-2"
                        >
                          Show User
                        </Link>
                        <Link
                          to={`/edit/${user.id}`}
                          className="btn btn-secondary btn-small mr-2"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger btn-small my-2"
                          type="button"
                          onClick={(id) => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                        <Link
                          to={`/createvacation/${user.id}`}
                          className=" btn btn-secondary"
                        >
                          Create Vaction
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
