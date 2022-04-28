import React, { useEffect, useState } from "react";
import { Card, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function EditUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [vacation, setVacation] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [code, setCode] = useState("");
  const [annualLeave, setAnnualLeave] = useState("");
  const { id } = useParams();
  const users = useSelector((state) => state);
  const filteredUser = users.find((user) => user.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (filteredUser) {
      setFirstName(filteredUser.firstName);
      setLastName(filteredUser.lastName);
      setPhone(filteredUser.phone);
      setEmail(filteredUser.email);
      setBirthDate(filteredUser.birthDate);
      setGender(filteredUser.gender);
      setVacation(filteredUser.vacation);
      setCode(filteredUser.code);
      setJoinDate(filteredUser.joinDate);
      setStatus(filteredUser.status);
      setRole(filteredUser.role);
      setMaritalStatus(filteredUser.maritalStatus);
      setAnnualLeave(filteredUser.annualLeave);
    }
  }, [filteredUser]);
  if (status === "Active" && vacation) {
    setVacation("");
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const emailChecker = users.find(
      (user) => user.id !== parseInt(id) && user.email === email && email
    );
    const phoneChecker = users.find(
      (user) => user.id !== parseInt(id) && user.number === parseInt(phone)
    );
    const codeChecker = users.find(
      (user) => user.id !== parseInt(id) && user.code === parseInt(code)
    );

    if (emailChecker) {
      return alert("email error");
    }
    if (phoneChecker) {
      return alert("Phone Id Repeated");
    }
    if (codeChecker) {
      return alert("Code Is Repeated");
    }
    const data = {
      id: parseInt(id),
      firstName,
      lastName,
      phone,
      email,
      joinDate,
      vacation,
      status,
      role,
      gender,
      code,
      birthDate,
      maritalStatus,
      annualLeave,
    };

    console.log(data);
    dispatch({ type: "UPDATEUSER", payload: data });
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        {filteredUser ? (
          <>
            {" "}
            <h1 className="display-5 text-center fw-bold my-5">
              Update User Code Number {code}
            </h1>
            <div className="row">
              <div className="col-md-6 p-5 shadow mx-auto">
                <Form onSubmit={handlesubmit}>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>First Name</Card.Title>
                        <input
                          type="text"
                          placeholder="firstName"
                          className="form-control text-center"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Last Name</Card.Title>
                        <input
                          type="text"
                          placeholder="lastName"
                          className="form-control text-center"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title> Specify Role</Card.Title>
                        <input
                          type="text"
                          placeholder="Specify Role"
                          className="form-control text-center"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title> MaritalStatus</Card.Title>
                        <input
                          type="text"
                          placeholder="Specify Role"
                          className="form-control text-center"
                          value={maritalStatus}
                          onChange={(e) => setMaritalStatus(e.target.value)}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Phone Number</Card.Title>
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={phone}
                          onChange={setPhone}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please Enter A Phone Number.
                        </Form.Control.Feedback>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Birth Date</Card.Title>
                        <input
                          type="date"
                          placeholder="Date Of Birth"
                          className="form-control text-center"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          max="2000-06-14"
                          min="1960-06-14"
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Join Date</Card.Title>
                        <input
                          type="date"
                          placeholder="Join Date"
                          className="form-control text-center"
                          value={joinDate}
                          onChange={(e) => setJoinDate(e.target.value)}
                          max="2024-06-14"
                          min="2010-06-14"
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Employee Code</Card.Title>
                        <input
                          type="text"
                          placeholder="Employee Code"
                          className="form-control text-center"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Email</Card.Title>
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control text-center"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title>Marital Status</Card.Title>
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="Select MaritalStatus"
                        >
                          <Form.Control
                            aria-label="Floating label select example"
                            required
                            as="select"
                            value={maritalStatus}
                            onChange={(e) => setMaritalStatus(e.target.value)}
                          >
                            <option value={""} disabled>
                              Marital Status
                            </option>
                            <option value="Married ">Married </option>
                            <option value="Widowed ">Widowed </option>
                            <option value="Divorced ">Divorced </option>
                            <option value="Single  ">Single </option>
                          </Form.Control>
                        </FloatingLabel>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="form-group my-2">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Title> Status</Card.Title>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="default" disabled hidden>
                            Status
                          </option>
                          <option value="Active">Active </option>
                          <option value="inActive">inActive</option>
                        </select>
                      </Card.Body>
                    </Card>
                  </div>
                  {status === "inActive" && (
                    <div className="form-group my-2">
                      <Card className="text-center">
                        <Card.Body>
                          <Card.Title>Vacation Type </Card.Title>
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
                            <option value="Sick">sick</option>
                            <option value="Annual">Annual </option>
                            <option value="Unpaid">Unpaid </option>
                            <option value="Maternity">Maternity</option>
                            <option value="Paternal">Paternal</option>
                          </Form.Control>
                        </Card.Body>
                      </Card>
                    </div>
                  )}

                  <div className="form-group">
                    <input
                      type="submit"
                      value="Update"
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
    </div>
  );
}

export default EditUser;
