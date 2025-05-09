import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import courseReducer from "./Courses/reducer";
import enrollmentReducer from "./Courses/enrollmentReducer"

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    courseReducer,
    enrollmentReducer,
  },
});

export default store;