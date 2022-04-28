import React, { useState } from "react";
import { initialState } from "../redux/reducers/contactReducer";
import { useNavigate } from "react-router-dom";
import UserItem from "./UserItem";
function FilterSideBar({
  filterVacation,
  handleFiltrerName,
  handleEmail,
  handleGender,
  handleStatus,
  handleVacation,
  status,
}) {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
    vacation: "",
  });

  const handleInput = (field) => (e) => {
    const { value } = e.target;

    setFilters({
      ...filters,
      [field]: value,
    });
    switch (field) {
      case "name":
        handleFiltrerName(value);
        break;

      case "email":
        handleEmail(value);
        break;

      case "gender":
        handleGender(value);
        break;
      case "status":
        handleStatus(value);
        break;
      case "vacation":
        handleVacation(value);
        break;
      case "from":
        break;
      case "to":
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom"> Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="firstName">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={handleInput("email")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue="default"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="default" disabled hidden>
            your gender
          </option>
          <option value="female">female </option>
          <option value="male">male</option>
        </select>
      </div>
      <div className="form-group my-2">
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue="default"
          id="status"
          onChange={handleInput("status")}
        >
          <option value="default" disabled hidden>
            Status
          </option>
          <option value="Active">Active </option>
          <option value="inActive">inActive</option>
        </select>
      </div>

      <div className="form-group my-2">
        <select
          className="form-select"
          aria-label="default select example"
          defaultValue="default"
          id="vacation"
          onChange={handleInput("vacation")}
        >
          <option value="default" disabled hidden>
            Vacation type
          </option>
          {filterVacation.map((vac) => (
            <>
              <option value={vac} key={vac}>
                {vac}{" "}
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterSideBar;
