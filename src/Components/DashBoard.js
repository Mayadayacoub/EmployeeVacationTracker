import React, { useEffect, useState } from "react";
import FilterSideBar from "./FilterSideBar";
import UserItem from "./UserItem";
import { initialState } from "../redux/reducers/contactReducer";
import { Link } from "react-router-dom";
function DashBoard() {
  const [data, setData] = useState(initialState);

  const filterVacation = () => {
    return [...new Set(data.map((user) => user.vacation))];
  };
  const handleFiltrerName = (name) => {
    const filterName = data.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      const smNm = name.toLowerCase();
      if (fullName.toLowerCase().includes(smNm)) {
        return user;
      }
    });
    setData(filterName);
  };
  const handleEmail = (email) => {
    const filterData = data.filter((user) => {
      const smNm = email.toLowerCase();
      if (user.email.toLowerCase().includes(smNm)) {
        return user;
      }
    });
    setData(filterData);
  };
  const handleGender = (gender) => {
    const filterData = data.filter((user) => {
      if (user.gender === gender) {
        return user;
      }
    });
    setData(filterData);
  };
  const handleStatus = (status) => {
    const filterData = data.filter((user) => {
      if (user.status === status) {
        return user;
      }
    });
    setData(filterData);
  };
  const handleVacation = (vacation) => {
    const filterData = data.filter((user) => {
      if (user.vacation === vacation) {
        return user;
      }
    });
    setData(filterData);
  };
  const handleRefresh = () => {
    setData(initialState);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterSideBar
            filterVacation={filterVacation()}
            handleFiltrerName={handleFiltrerName}
            handleEmail={handleEmail}
            handleGender={handleGender}
            handleStatus={handleStatus}
            handleVacation={handleVacation}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {data.map((user) => {
              return <UserItem user={user} key={user.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="form-group">
        <Link
          to="/dashboard"
          className="d-grid gap-2 col-6 mx-auto btn btn-secondary my-5"
          onClick={handleRefresh}
        >
          Refresh{" "}
        </Link>
      </div>
      <div className="form-group">
        <Link to="/" className="d-grid gap-2 col-6 mx-auto btn btn-danger my-5">
          Cancel{" "}
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;
