import { Navigate, Route, Routes } from "react-router-dom";
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css"
import { useEffect, useState } from "react";
import Session from "./Account/Session";
import * as client from "./Courses/client";
import { useSelector } from "react-redux";
import * as userClient from "./Account/client";
//import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
        try {
          const courses = await client.fetchAllCourses();
          setCourses(courses);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        fetchCourses();
      }, [currentUser]);


  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
  //  const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <Session>
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="Account/*" element={<Account />} />

          <Route path="Dashboard" element={
            <ProtectedRoute>
              <Dashboard
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                courses={courses}
              />
            </ProtectedRoute>
          } />

          
          <Route path="Courses/:cid/*" element={
            <ProtectedRoute>
              <Courses courses={courses} />
            </ProtectedRoute>
          } />

          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
    </Session>
  );
}
