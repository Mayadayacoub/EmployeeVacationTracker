export const initialState = [
  {
    id: 0,
    firstName: "Mayada",
    lastName: "Yacoub",
    phone: "+201192838",
    birthDate: "25/6/1988",
    joinDate: "21/01/2001",
    gender: "female",
    maritalStatus: "single",
    email: "r@t.com",
    code: 100,
    role: "student",
    status: "Active",
    startDate: "",
    endDate: "",
    annualLeave: 30,
  },
  {
    id: 1,
    firstName: "haya ",
    lastName: "Yacoub",
    phone: "+2010992838",
    birthDate: "25/6/1988",
    joinDate: "18/07/2021",
    gender: "female",
    maritalStatus: "single",
    email: "e@t.com",
    code: 101,
    role: "teacher",
    status: "inActive",
    vacation: "Sick",
    startDate: "2010-09-07T00:00",
    endDate: "2010-09-17T00:00",
    annualLeave: 10,
  },
  {
    id: 2,
    firstName: "Kasem ",
    lastName: "Sakr",
    phone: " +201099008",
    birthDate: "25/11/2000",
    joinDate: "18/07/2014",
    gender: "male",
    maritalStatus: "Married",
    email: "ess@t.com",
    code: 102,
    role: "Junior Developer",
    status: "Active",
    startDate: "",
    endDate: "",
    annualLeave: 0,
  },
  {
    id: 3,
    firstName: "Steve ",
    lastName: "Karam",
    phone: "+2010992838",
    birthDate: "2/9/1990",
    joinDate: "18/06/2018",
    gender: "male",
    maritalStatus: "Married",
    email: "eht@t.com",
    code: 103,
    role: "Junior Developer",
    status: "inActive",
    vacation: "Unpaid",
    startDate: "2010-09-07T00:00",
    endDate: "2010-09-17T00:00",
    annualLeave: 0,
  },
];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDUSER":
      return [...state, action.payload];
    case "UPDATEUSER":
      const updatedUser = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state = updatedUser;
      return state;
    case "UPDATEVACATION":
      const updatedVacation = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state = updatedVacation;
      return state;
    case "DELETE":
      const filterUser = state.filter(
        (user) => user.id !== action.payload && user
      );
      state = filterUser;
      return state;

    default:
      return state;
  }
};
export default reducer;
