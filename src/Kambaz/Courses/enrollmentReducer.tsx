import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments, // Preloaded from Database
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload }) => {
      const { userId, courseId } = payload;
      if (!state.enrollments.some(e => e.user === userId && e.course === courseId)) {
        state.enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
      }
    },
    unenrollFromCourse: (state, { payload }) => {
      const { userId, courseId } = payload;
      state.enrollments = state.enrollments.filter(e => !(e.user === userId && e.course === courseId));
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
