import React, { useState } from "react";
import { Card, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function AddUser() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [code, setCode] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [role, setRole] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [vacation, setVacation] = useState("");
  const [status, setStatus] = useState("");

  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = users.map((u) => u.id);
  console.log(data);
  console.log(users);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !birthDate ||
      !joinDate
    ) {
      return alert("Please Fill The Form");
    }
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    const emailChecker = users.find((user) => user.email === email && email);
    const phoneChecker = users.find((user) => user.number === parseInt(phone));
    const codeChecker = users.find((user) => user.code === parseInt(code));

    if (emailChecker) {
      return alert("email error");
    }
    if (codeChecker) {
      return alert("code repeated");
    }
    if (phoneChecker) {
      return alert("phone error");
    }
    navigate("/");
    const data = {
      id: users[users.length - 1].id + 1,
      firstName,
      lastName,
      phone,
      gender,
      birthDate,
      email,
      vacation,
      status,
      role,
      joinDate,
      maritalStatus,
      code,
    };
    console.log(data);
    dispatch({ type: "ADDUSER", payload: data });
    navigate("/");
  };
  return (
    <div className="container-fluid">
      <h1 className="display-5 text-center fw-bold my-5"> Add User</h1>
      <div className="row">
        <div className="col-md-6 p-5 shadow mx-auto">
          <Form onSubmit={handlesubmit} noValidate validated={validated}>
            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>First Name</Card.Title>
                  <Form.Group controlId="validationCustom03">
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please choose a First Name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Card.Body>
              </Card>
            </div>
            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Last Name</Card.Title>

                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please choose a Last Name.
                  </Form.Control.Feedback>
                </Card.Body>
              </Card>
            </div>

            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title> Code</Card.Title>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Code "
                    defaultValue={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Create Code
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Enter A Phone Number.
                  </Form.Control.Feedback>
                </Card.Body>
              </Card>
            </div>
            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Email</Card.Title>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
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
                      <option value="" disabled>
                        Marital Status
                      </option>
                      <option value="Married ">Married </option>
                      <option value="Widowed ">Widowed </option>
                      <option value="Divorced ">Divorced </option>
                      <option value="Single  ">Single </option>
                    </Form.Control>
                  </FloatingLabel>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </Card.Body>
              </Card>
            </div>
            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Join Date</Card.Title>
                  <Form.Control
                    type="date"
                    required
                    defaultValue={joinDate}
                    name="date"
                    placeholder="join Date"
                    className="form-control"
                    max="2022-06-14"
                    min="2010-06-14"
                    onChange={(e) => setJoinDate(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Select The Join Date .
                  </Form.Control.Feedback>
                </Card.Body>
              </Card>
            </div>
            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Birth Date</Card.Title>

                  <Form.Control
                    type="date"
                    required
                    defaultValue={birthDate}
                    name="date"
                    placeholder="Date Of Birth"
                    className="form-control"
                    max="2000-06-14"
                    min="1960-06-14"
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Select The Birth date.
                  </Form.Control.Feedback>
                </Card.Body>
              </Card>
            </div>
            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Specify Role</Card.Title>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify Role"
                    defaultValue={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Specify the Role
                  </Form.Control.Feedback>
                </Card.Body>
              </Card>
            </div>
            <div className="form-group my-2">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Select Gender</Card.Title>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Select Gender"
                  >
                    <Form.Control
                      aria-label="Floating label select example"
                      required
                      as="select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value={""} disabled>
                        Select Gender
                      </option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please Specify Gender
                    </Form.Control.Feedback>
                  </FloatingLabel>
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
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please Select The Status
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Card.Body>
              </Card>
            </div>
            {status === "inActive" && (
              <div className="form-group my-2">
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>VacatioN Type</Card.Title>
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
                        <option value="Annual ">Annual Leave </option>
                        <option value="sick">sick</option>
                        <option value="Unpaid">Unpaid </option>
                        <option value="Maternity">Maternity</option>
                        <option value="Paternal">Paternal</option>
                      </Form.Control>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please Select The Status
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Card.Body>
                </Card>
              </div>
            )}

            <div className="form-group">
              <input
                type="submit"
                value="Add"
                className="d-grid gap-2 col-6 mx-auto btn btn-secondary"
              />
            </div>
            <Link
              to="/"
              className="d-grid gap-2 col-6 mx-auto btn btn-danger my-3"
            >
              Cancel{" "}
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
