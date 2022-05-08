import React, { useCallback, useEffect, useRef, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import { Card, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function CreateVacation() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [vacation, setVacation] = useState("");
  const [status, setStatus] = useState("");
  const [code, setCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [annualLeave, setAnnualLeave] = useState("");
  const inputRef = useRef();
  const { id } = useParams();
  const users = useSelector((state) => state);

  let diffTime = Math.abs(
    new Date(startDate).valueOf() - new Date(endDate).valueOf()
  );
  let days = diffTime / (24 * 60 * 60 * 1000);
  let hours = (days % 1) * 24;
  [days, hours] = [Math.floor(days), Math.floor(hours)];

  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  const currentFullDate = new Date();
  const nextYear = new Date(endDate).getFullYear() + 1;
  const currentYear = new Date().getFullYear();
  const total = Math.abs(days - 30);
  var str = Date.parse(startDate);
  var end = Date.parse(endDate);

  console.log(startDay);

  console.log(str);

  const filteredUser = users.find((user) => user.id === parseInt(id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (filteredUser) {
      setFirstName(filteredUser.firstName);
      setLastName(filteredUser.lastName);
      setVacation(filteredUser.vacation);
      setCode(filteredUser.code);
      setEmail(filteredUser.email);
      setStatus(filteredUser.status);
      setPhone(filteredUser.phone);
      setStartDate(filteredUser.startDate);
      setEndDate(filteredUser.endDate);
      setGender(filteredUser.gender);
      setRole(filteredUser.role);
      setJoinDate(filteredUser.joinDate);
      setBirthDate(filteredUser.birthDate);
      setMaritalStatus(filteredUser.maritalStatus);
      setAnnualLeave(filteredUser.annualLeave);
    }
  }, [filteredUser]);

  if (currentFullDate > startDay || currentFullDate > endDay) {
    alert(
      ` you Picked Earlier Date ${startDate} and Today is ${currentFullDate}`
    );
    setStartDate("");
    setEndDate("");
    setStatus("");
  }

  if (str >= end) {
    //   console.log(days);
    alert("End date should be greater than Start date");
    setStartDate("");
    setEndDate("");
    setStatus("");
  }

  if (vacation === "Sick" && days > 15) {
    alert(
      `${vacation} Vacation should be At the most 15 days you have entered ${days} Please Try again`
    );
    setVacation("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  }

  if (vacation === "Annual" && days > 30) {
    alert(
      `${vacation} Vacation should be At the most 30 days Per Year you have entered ${days} Please Try again`
    );
    setVacation("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  }

  if (vacation === "Maternity" && days > 45) {
    alert(
      `${vacation} Vacation should be At the most 45 days you have entered ${days} Please Try again`
    );
    setVacation("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  }
  if (vacation === "Paternal" && days > 5) {
    alert(
      `${vacation} Vacation should be At the most 5 days you have entered ${days} Please Try again`
    );
    setVacation("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  }
  if (gender === "male" && vacation === "Maternity") {
    alert(` ${vacation} vacations for Female`);
    setVacation("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  }
  if (status === "Active" && vacation) {
    setVacation("");
    setStartDate("");
    setEndDate("");
  }
  if (vacation === "Annual" && days < 30) {
    if (Math.abs(total - 30) !== annualLeave) {
      alert(
        ` confirm selecting ${Math.abs(total - 30)} Day to continue Process`
      );
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      if (!vacation) {
        return alert("please select vacation type");
      }

      if (!startDate || !!endDate) {
        return alert("please Select The start Date and The end Date ");
      }

      setValidated(true);
    }

    const data = {
      id: parseInt(id),

      lastName,
      phone,
      email,
      joinDate,
      vacation,
      status,
      role,
      gender,
      code,
      startDate,
      endDate,
      birthDate,
      maritalStatus,
      annualLeave,
    };

    dispatch({ type: "UPDATEUSER", payload: data });

    navigate("/");
  };

  return (
    <div className="container">
      {filteredUser ? (
        <>
          {" "}
          <h1 className="display-5 text-center fw-bold my-5">
            Create Vacation {firstName} {lastName}
          </h1>
          <div className="row">
            <div className="col-md-6 p-5 shadow mx-auto">
              <Form onSubmit={handlesubmit} noValidate validated={validated}>
                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Full Name </Card.Title>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={`${firstName} ${lastName}`}
                        disabled
                      />
                    </Card.Body>
                  </Card>
                </div>

                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Phone Number</Card.Title>
                      <input
                        type="tel"
                        placeholder="Mobile number"
                        className="form-control text-center"
                        value={phone}
                        disabled
                      />
                    </Card.Body>
                  </Card>
                </div>

                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title> Code</Card.Title>
                      <input
                        type="text"
                        placeholder="Employee Code"
                        className="form-control text-center"
                        disabled
                        value={code}
                      />
                    </Card.Body>
                  </Card>
                </div>
                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title> Annual Leave</Card.Title>
                      <input
                        type="text"
                        placeholder="Employee Code"
                        className="form-control text-center"
                        disabled
                        value={annualLeave}
                      />
                    </Card.Body>
                  </Card>
                </div>
                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title> Email</Card.Title>
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control text-center"
                        disabled
                        value={email}
                      />
                    </Card.Body>
                  </Card>
                </div>

                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title> Employee Role</Card.Title>

                      <input
                        type="text"
                        value={role}
                        name="role"
                        placeholder="Employe Role"
                        className="form-control text-center"
                        disabled
                      />
                    </Card.Body>
                  </Card>
                </div>

                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title> Gender</Card.Title>
                      <select
                        className="form-select text-center"
                        aria-label="Default select example"
                        disabled
                        value={gender}
                      >
                        <option value="default" disabled hidden>
                          your gender
                        </option>
                        <option value="female">Female </option>
                        <option value="male">Male</option>
                      </select>
                    </Card.Body>
                  </Card>
                </div>

                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Status</Card.Title>
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Select Status"
                      >
                        <Form.Control
                          aria-label="Floating label select example"
                          required
                          as="select"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value={""} disabled>
                            Status
                          </option>
                          <option value="Active">Active</option>
                          <option value="inActive">inActive</option>
                        </Form.Control>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please Select The Status
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Card.Body>
                  </Card>
                </div>
                {status === "inActive" && (
                  <>
                    <div className="form-group my-2">
                      <Card className="text-center">
                        <Card.Body>
                          <Card.Title>Vacation Type</Card.Title>
                          <FloatingLabel
                            controlId="floatingSelect"
                            label="Select Status"
                          >
                            <Form.Control
                              aria-label="Floating label select example"
                              required
                              as="select"
                              value={vacation}
                              onChange={(e) => setVacation(e.target.value)}
                            >
                              <option value="default" hidden>
                                Vacation type
                              </option>
                              <option value="Sick">Sick</option>
                              <option value="Annual">Annual </option>
                              <option value="Unpaid">Unpaid </option>
                              <option value="Maternity">Maternity</option>
                              <option value="Paternal">Paternal</option>
                            </Form.Control>
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Please Select The Status
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Card.Body>
                      </Card>
                    </div>
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Start Date</Card.Title>

                        <Form.Control
                          type="datetime-local"
                          id="meeting-time"
                          required
                          defaultValue={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          min={currentFullDate}
                          max="2022-12-30T00:00"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please Select The Join Date .
                        </Form.Control.Feedback>
                      </Card.Body>

                      <Card.Body>
                        <Card.Title>End Date</Card.Title>

                        <Form.Control
                          type="datetime-local"
                          required
                          id="meeting-time"
                          defaultValue={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          min={currentFullDate}
                          max="2022-12-30T00:00"
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please Select The Join Date .
                        </Form.Control.Feedback>
                      </Card.Body>

                      <Card className="h5 p-5 my-5">
                        Total Number oF vacations are: {days} days and {hours}{" "}
                        Hours
                      </Card>
                    </Card>
                  </>
                )}

                <div className="form-group my-2">
                  {vacation === "Annual" && days < 30 && (
                    <Card className="text-center">
                      <>
                        <Card body className="h5 mx-auto my-5">
                          <Card.Body>
                            <Card.Title>
                              Choose Number Of Days For The Annual Leave
                            </Card.Title>
                            {(vacation === "Annual") & (days < 30) && (
                              <input
                                type="number"
                                ref={inputRef}
                                placeholder="Annual Leave"
                                className="form-control text-center"
                                max="30"
                                value={annualLeave}
                                onChange={(e) => setAnnualLeave(e.target.value)}
                              />
                            )}
                            <div> {Math.abs(total - 30)}</div>
                            a)Total Days of Annual Vacation Taken :
                            {Math.abs(total - 30)} Days <br />
                            <hr />
                            b) Annual Vacations Days Reminder: <br />{" "}
                            {Math.abs(Math.abs(total - 30) - 30)} days {""}
                            Till End Of Year {currentYear}
                            <br />
                            <br />
                          </Card.Body>
                        </Card>
                      </>
                    </Card>
                  )}
                </div>
                <div className="form-group my-5">
                  <input
                    type="submit"
                    value="Create"
                    className="d-grid gap-2 col-6 mx-auto btn btn-secondary"
                  />

                  <Link
                    to="/"
                    className="d-grid gap-2 col-6 mx-auto btn btn-danger my-3"
                  >
                    Cancel{" "}
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          student with id {id} is not exist
        </h1>
      )}
    </div>
  );
}

export default CreateVacation;
