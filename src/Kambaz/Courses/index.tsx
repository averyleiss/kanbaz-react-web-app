import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { Row, Col } from "react-bootstrap";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses" className="container-fluid p-4">
       <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <Row>
        {/* Course Navigation - Hidden on Small Screens */}
        <Col md={2} className="d-none d-md-block">
          <CourseNavigation />
        </Col>

        {/* Course Main Content */}
        <Col md={10}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="/Kambaz/Courses/:cid/*" element={<Courses />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}
