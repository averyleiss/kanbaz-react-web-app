
import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/modules`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const findAssignmentsForCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`);
    return data;
  };

export const createAssignment = async (moduleId: string, assignment: any) => {
  const { data } = await axiosWithCredentials.post(`${ASSIGNMENTS_API}/${moduleId}/assignments`, assignment);
  return data;
};

export const updateAssignment = async (assignmentId: string, updates: any) => {
  const { data } = await axiosWithCredentials.put(`${REMOTE_SERVER}/api/assignments/${assignmentId}`, updates);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
  return response.status;
};

export const findAssignmentById = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/assignments/${assignmentId}`);
  return data;
};
