
import { createSlice } from "@reduxjs/toolkit";

export interface AssignmentType {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  availableUntil: string;
  availableFrom?: string;
  points?: number;
  course: string;
  editing?: boolean;
}

interface AssignmentsState {
  assignments: AssignmentType[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload }) => {
      state.assignments = payload;
    },
    addAssignment: (state, { payload }) => {
      state.assignments.push(payload);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const { 
  setAssignments,
  addAssignment, 
  deleteAssignment, 
  updateAssignment, 
  editAssignment 
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
