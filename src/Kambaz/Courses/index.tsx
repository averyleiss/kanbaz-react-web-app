import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import { Row, Col } from "react-bootstrap";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { ImParagraphJustify } from "react-icons/im";
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div id="wd-courses" className="container-fluid p-4">
      <h2> <ImParagraphJustify /> Course 1234</h2>
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
          </Routes>
        </Col>
      </Row>
    </div>
  );
}
