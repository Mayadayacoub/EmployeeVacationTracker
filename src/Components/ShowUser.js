import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function ShowUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [annualLeave, setAnnualLeave] = useState("");
  const [vacation, setVacation] = useState("");
  const [status, setStatus] = useState("");
  const [code, setCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let diffTime = Math.abs(
    new Date(startDate).valueOf() - new Date(endDate).valueOf()
  );
  let days = diffTime / (24 * 60 * 60 * 1000);
  let annualDays = diffTime / (24 * 60 * 60 * 1000);
  let hours = (days % 1) * 24;
  [days, hours, annualDays] = [
    Math.floor(days),
    Math.floor(hours),
    Math.floor(annualDays),
  ];

  const currentYear = new Date().getFullYear();
  const total = Math.abs(annualDays - 30);

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
      setStatus(filteredUser.status);
      setStartDate(filteredUser.startDate);
      setEndDate(filteredUser.endDate);
      setAnnualLeave(filteredUser.annualLeave);
    }
  }, [filteredUser]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const emailChecker = users.find(
      (user) => user.id !== parseInt(id) && user.email === email && email
    );

    navigate("/");
    if (emailChecker) {
      return alert("email error");
    }

    const data = {
      id: parseInt(id),
      firstName,
      lastName,
      phone,
      gender,
      email,
      vacation,
      birthDate,
      status,
      code,
      startDate,
      endDate,
      annualLeave,
    };
    console.log(data);
    dispatch({ type: "UPDATEUSER", payload: data });
    navigate("/");
  };
  return (
    <div>
      {filteredUser ? (
        <>
          {" "}
          <h1 className="display-5 text-center fw-bold my-5">
            User with Code {code}
          </h1>
          <div className="row">
            <div className="col-md-6 p-5 shadow mx-auto">
              <form onSubmit={handlesubmit}>
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
                      <Card.Title>Gender </Card.Title>
                      <select
                        className="form-select text-center"
                        aria-label="Default select example"
                        disabled
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="default" disabled hidden>
                          your gender
                        </option>
                        <option value="female">female </option>
                        <option value="male">male</option>
                      </select>
                    </Card.Body>
                  </Card>
                </div>
                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Phone Number </Card.Title>
                      <input
                        type="tel"
                        placeholder="Mobile number"
                        className="form-control text-center"
                        disabled
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Card.Body>
                  </Card>
                </div>

                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Employ Code</Card.Title>
                      <input
                        type="text"
                        placeholder="Employee Code"
                        className="form-control text-center"
                        disabled
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </Card.Body>
                  </Card>
                </div>
                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Email </Card.Title>
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control text-center"
                        disabled
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Card.Body>
                  </Card>
                </div>
                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Status </Card.Title>
                      <select
                        className="form-select text-center"
                        aria-label="Default select example"
                        disabled
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

                <div className="form-group my-2">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Annual Leave</Card.Title>
                      <input
                        type="number"
                        placeholder="Annual Leave"
                        className="form-control text-center"
                        disabled
                        value={annualLeave}
                        onChange={(e) => setAnnualLeave(e.target.value)}
                      />
                      <Card body className="h5 mx-auto my-5">
                        {/* <div> {annualLeave}</div> */}
                        Total Days Taken of Annual Vacation
                        <p className="text-decoration-underline fw-bold my-1">
                          {annualLeave}
                        </p>{" "}
                        Days
                        <hr />
                        Total Days Reminder Of Annual Vacation
                        <p className="text-decoration-underline fw-bold my-1">
                          {" "}
                          {Math.abs(annualLeave - 30)}
                        </p>
                        Days {""}
                        Till End Of Year {currentYear}
                        <br />
                        <br />
                      </Card>
                    </Card.Body>
                  </Card>
                </div>
                {status === "inActive" && (
                  <>
                    <div className="form-group my-2">
                      <Card className="text-center">
                        <Card.Body>
                          <Card.Title>Vacation Type </Card.Title>
                          <Form.Control
                            className="text-center"
                            aria-label="Floating label select example "
                            disabled
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
                    <div className="form-group my-2 ">
                      <div className="row">
                        <Card className="text-center">
                          <Card.Body>
                            <Card.Title>vacation starts at: </Card.Title>

                            <input
                              type="datetime-local"
                              id="meeting-time"
                              defaultValue={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                              disabled
                            />

                            <Card.Title>vacation Ends at: </Card.Title>
                            <input
                              type="datetime-local"
                              id="meeting-time"
                              defaultValue={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                              disabled
                            />
                            <Card body className="h5 mx-auto my-2">
                              Total Duration of {vacation} Vacation : {days}{" "}
                              Days and {hours} Hours
                            </Card>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </>
                )}

                <div className="form-group">
                  <Link
                    to="/"
                    className="d-grid gap-2 col-6 mx-auto btn btn-danger my-3"
                  >
                    Back{" "}
                  </Link>
                </div>
              </form>
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

export default ShowUser;
